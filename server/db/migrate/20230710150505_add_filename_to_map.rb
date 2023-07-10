class AddFilenameToMap < ActiveRecord::Migration[7.0]
  def change
    add_column :maps, :filename, :string
  end
end
