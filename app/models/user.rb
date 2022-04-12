class User < ApplicationRecord
    has_secure_password

    has_many :articles, dependent: :destroy
    has_many :favorites 

    validates :username, presence: true, uniqueness: true
end
