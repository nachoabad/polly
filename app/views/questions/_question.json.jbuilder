json.extract! question, :id, :sentence, :position, :poll_id, :created_at, :updated_at
json.url question_url(question, format: :json)
