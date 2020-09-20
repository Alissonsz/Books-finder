# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_20_172508) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "download_link"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "cover_url"
    t.integer "libgen_id"
    t.string "lenguage"
    t.string "serie"
    t.string "file_infos"
    t.string "libgen_page_url"
  end

  create_table "books_queries", force: :cascade do |t|
    t.bigint "book_id"
    t.bigint "query_id"
    t.index ["book_id"], name: "index_books_queries_on_book_id"
    t.index ["query_id"], name: "index_books_queries_on_query_id"
  end

  create_table "queries", force: :cascade do |t|
    t.string "query_name"
  end

end
