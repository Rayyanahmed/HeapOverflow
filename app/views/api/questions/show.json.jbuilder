json.(@question, :id, :created_at, :updated_at, :title, :content)

json.user @question.user.username 
json.vote_count @question.votes.where("value = 1").count - @question.votes.where("value = -1").count

json.tags @question.tags do |tag|
	json.extract!(tag, :id, :name, :description, :created_at, :updated_at)
end


json.answers @question.answers do |answer|
	json.extract!(answer, :id, :content, :question_id, :user_id, :created_at, :updated_at)
	json.user answer.user.username
	json.vote_count answer.votes.where("value = 1").count - answer.votes.where("value = -1").count
	json.comments answer.comments do |comment|
		json.extract!(comment, :id, :body, :answer_id, :user_id, :created_at, :updated_at)
		json.user comment.user.username
	end
end