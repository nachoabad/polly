class Question < ApplicationRecord
  belongs_to :poll
  has_many :choices
end
