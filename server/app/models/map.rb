class Map < ApplicationRecord
    has_many :characters
    has_many :scores

    validates :name, presence: true
    validates :url, presence: true
end
