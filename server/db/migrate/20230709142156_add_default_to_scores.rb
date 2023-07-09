class AddDefaultToScores < ActiveRecord::Migration[7.0]
  def change
    change_column_default :scores, :player_name, "Anon"
  end
end
