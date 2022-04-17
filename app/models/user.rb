class User < ApplicationRecord
    has_secure_password

    has_many :articles, dependent: :destroy
    has_many :favorites 

    has_many :favorited_articles,
    through: :favorites, source: :article

    validates :username, presence: true, uniqueness: true
    # validates :password, presence: true, uniqueness: true
end
