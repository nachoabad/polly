class Question < ApplicationRecord
  belongs_to :poll
  has_many :choices
  has_many :answers, through: :choices
  
  default_scope { order(position: :asc) }

  def total_answers
    answers.count
  end
end
