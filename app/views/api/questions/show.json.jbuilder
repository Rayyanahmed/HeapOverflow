json.(@question, :id, :created_at, :updated_at, :title, :content)
json.tags @question.tags do |tag|
	json.extract!(tag, :id, :name, :description, :created_at, :updated_at)
end


json.answers @question.answers do |answer|
	json.extract!(answer, :id, :content, :question_id, :user_id, :created_at, :updated_at)
	json.comments answer.comments do |comment|
		json.extract!(comment, :id, :body, :answer_id, :user_id, :created_at, :updated_at)
	end
end