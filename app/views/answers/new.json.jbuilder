json.questions @poll.questions do |question|
  json.sentence question.sentence
  json.choices question.choices do |choice|
    json.id choice.id
    json.sentence choice.sentence
    json.color choice.color
  end
end