json.array!(@questions) do |question|
	json.(question, :id, :created_at, :updated_at, :title, :content)
	json.user question.user.username
	json.tags question.tags do |tag|
		json.extract!(tag, :id, :name, :description, :created_at, :updated_at)
	end
end

