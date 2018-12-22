json.extract! poll, :id, :title, :slug, :user_id

json.questions @poll.questions do |question|
  json.extract! question, :id, :sentence, :position, :poll_id
  json.choices question.choices do |choice|
    json.extract! choice, :id, :sentence, :position, :question_id
  end
end