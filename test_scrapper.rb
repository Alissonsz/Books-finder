require 'nokogiri'
require 'httparty'
require 'byebug'

def scrap
  scraped_pages_count = 0  
  baseURL = 'http://libgen.rs/fiction/?q=' + 'ab' 
  unparsed_page = HTTParty.get(baseURL)
  parsed_page = Nokogiri::HTML(unparsed_page)
  books_table = parsed_page.css("tbody")
  books_rows = books_table.css("tr")
  parsed_books = [ ]
  books_rows.each do |book|
    book_infos = {
      author: book.css("ul.catalog_authors").text.strip,
      serie: book.css("td")[1].text.strip,
      title: book.css("td")[2].css("a").text.strip,
      download_page_link: book.css("td")[2].css("a").first['href'],
      lenguage: book.css("td")[3].text.strip,
      file_infos: book.css("td")[4].text.strip
    }

    if scraped_pages_count < 10
      book_url = 'http://libgen.rs' +  book_infos[:download_page_link]
      unparsed_book_page = HTTParty.get(book_url)
      parsed_book_page = Nokogiri::HTML(unparsed_book_page)
      byebug
      body = parsed_book_page.css("tbody")
      id_row = body.css("tr")[7]
      id = id_row.css("td")[1].text.strip
      book_infos[:libgen_id] = id
      scraped_pages_count += 1
    end

    parsed_books.push(book_infos)
  end
end

scrap
