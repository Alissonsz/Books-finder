require 'nokogiri'
require 'httparty'
require 'byebug'

def scrap  
  baseURL = 'http://libgen.is/fiction/?q=' + 'harry potter'
  unparsed_page = HTTParty.get(baseURL)
  parsed_page = Nokogiri::HTML(unparsed_page)
  books_table = parsed_page.css("tbody")
  books_rows = books_table.css("tr")
  parsed_books = [ ]
  byebug
end

scrap
