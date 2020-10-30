require 'scrapper'

module Api
  module V1
    class BooksController < ApplicationController
      
      def search
        query = Query.find_by(query_name: params[:title])

        if query.nil?
          new_query = Query.new
          new_query.query_name = params[:title]

          book_title = params[:title]
          response = Scrapper.getBooks(book_title)

          response.each do |book|
            current_book = Book.find_by(libgen_id: book[:libgen_id])

            if current_book.nil?
              current_book = Book.new
              current_book.title           = book[:title]
              current_book.author          = book[:author]
              current_book.libgen_id       = book[:libgen_id]
              current_book.cover_url       = book[:cover_id]
              current_book.serie           = book[:serie]
              current_book.lenguage        = book[:lenguage]
              current_book.libgen_page_url = book[:download_page_link]
              current_book.file_infos      = book[:file_infos]

              current_book.save
            end

            new_query.books << current_book
          end

          new_query.save
          render json: new_query.books
        else
          render json: query.books
        end
      end
    end
  end
end