class Map < ApplicationRecord
    has_many :characters
    has_many :scores, -> { order(seconds: :asc) }

    validates :name, presence: true
end
