class RemoveUrlFromMaps < ActiveRecord::Migration[7.0]
  def change
    remove_column :maps, :url
  end
end
