require 'scrapper'

module Api
  module V1
    class BooksController < ApplicationController
      def search
        book_title = params[:title]
        response = Scrapper.getBooks(book_title)
        render json: response
      end
    end
  end
end