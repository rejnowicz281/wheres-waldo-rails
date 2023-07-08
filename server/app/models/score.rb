class Score < ApplicationRecord
  belongs_to :map

  validates :player_name, presence: true
  validates :seconds, presence: true
end
