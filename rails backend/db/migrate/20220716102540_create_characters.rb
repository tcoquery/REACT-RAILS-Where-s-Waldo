class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.boolean :found
      t.integer :x
      t.integer :y
      t.references :image, null: false, foreign_key: true

      t.timestamps
    end
  end
end
