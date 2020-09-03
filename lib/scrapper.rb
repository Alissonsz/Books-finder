require 'nokogiri'
require 'httparty'

class Scrapper

  def self.scrap(book_title)
    baseURL = 'http://libgen.is/fiction/?q=' + book_title 
    unparsed_page = HTTParty.get(baseURL)
    parsed_page = Nokogiri::HTML(unparsed_page)
    books_table = parsed_page.css("tbody")
    books_rows = books_table.css("tr")
    parsed_books = [ ]
    books_rows.each do |book|
      parsed_books.push({
        author: book.css("ul.catalog_authors").text.strip,
        serie: book.css("td")[1].text.strip,
        title: book.css("td")[2].css("a").text.strip,
        download_page_link: book.css("td")[2].css("a").first['href'],
        lenguage: book.css("td")[3].text.strip,
        file_infos: book.css("td")[4].text.strip,
      })
    end

    return parsed_books
  end
end