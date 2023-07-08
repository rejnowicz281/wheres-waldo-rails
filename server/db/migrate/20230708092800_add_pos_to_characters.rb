class AddPosToCharacters < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :x, :integer
    add_column :characters, :y, :integer
  end
end
