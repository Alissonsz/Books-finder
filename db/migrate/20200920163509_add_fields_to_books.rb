class AddFieldsToBooks < ActiveRecord::Migration[6.0]
  def change
    change_table :books do |t|
      t.string   :cover_url
      t.integer  :libgen_id
      t.string   :lenguage
      t.string   :serie
      t.string   :file_infos
      t.string   :libgen_page_url
    end
  end
end
