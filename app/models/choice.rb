class Choice < ApplicationRecord
  belongs_to :question
  has_many :answers

  default_scope { order(position: :asc) }

  def total
    answers.count
  end

  def percentage
    100 * total / question.total_answers
  end
end
