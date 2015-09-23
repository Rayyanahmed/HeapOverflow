json.array!(@questions) do |question|
	json.(question, :id, :created_at, :updated_at, :title, :content)
end