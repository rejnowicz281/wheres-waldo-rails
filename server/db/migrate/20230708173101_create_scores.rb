class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.string :player_name
      t.integer :seconds
      t.references :map, null: false, foreign_key: true

      t.timestamps
    end
  end
end
