class Map < ApplicationRecord
    has_many :characters
    has_many :scores
    has_one_attached :image

    validates :name, presence: true
end
