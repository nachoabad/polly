class Question < ApplicationRecord
  belongs_to :poll
  has_many :choices
  
  default_scope { order(position: :asc) }
end
