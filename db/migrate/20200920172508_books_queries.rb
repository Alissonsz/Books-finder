class BooksQueries < ActiveRecord::Migration[6.0]
  def self.up
    create_table :books_queries do |t|
      t.references :book, :query
    end
  end

  def self.down
    drop_table :books_queries
  end
end
