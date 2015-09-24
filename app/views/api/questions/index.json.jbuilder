json.array!(@questions) do |question|
	json.(question, :id, :created_at, :updated_at, :title, :content)
	json.user question.user.username
	json.views question.views
	json.vote_count (question.votes.where("value = 1").count - question.votes.where("value = -1").count)
	json.answer_count question.answers.length
	json.tags question.tags do |tag|
		json.extract!(tag, :id, :name, :description, :created_at, :updated_at)
	end
end

