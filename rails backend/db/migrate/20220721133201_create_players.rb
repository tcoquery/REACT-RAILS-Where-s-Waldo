class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :time
      t.references :images, null: false, foreign_key: true

      t.timestamps
    end
  end
end
