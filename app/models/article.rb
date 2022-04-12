class Article < ApplicationRecord
    has_many :favorited_articles,
    through: :favorites, source:"Article"
end
