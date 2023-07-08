class Character < ApplicationRecord
  belongs_to :map

  validates :name, presence: true
  validates :x, presence: true
  validates :y, presence: true
end
