class ChangeColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :players, :images_id, :image_id
  end
end
