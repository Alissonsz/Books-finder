require 'nokogiri'
require 'httparty'

class Scrapper

  def self.scrap(book_title)
    scraped_pages_count = 0
    baseURL = 'http://libgen.rs/fiction/?q=' + book_title 
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
        id = parsed_book_page.css("table")[1].at(':contains("ID")').css("td")[1].text.strip
        book_infos[:libgen_id] = id

        first_id = ''
        first_id = id[0..2] if id.length == 6
        first_id = id[0..3] if id.length == 7

        book_infos[:cover_id] = 'http://gen.lib.rus.ec/fictioncovers/' + first_id + '000' + book_infos[:download_page_link][8...].downcase + '.jpg'
        scraped_pages_count += 1
      end

      parsed_books.push(book_infos)
    end

    return parsed_books
  end
end