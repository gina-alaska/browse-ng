class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :title
      t.text :content
      t.datetime :published_at

      t.timestamps
    end
  end
end
