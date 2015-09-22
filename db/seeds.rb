
Question.destroy_all
Answer.destroy_all
i = 0
while i < 50
	question = Question.create!(title: "This is a test question", content: "trying to get some formatting done", user_id: 1)
	j = 0
	while j < 5
		answer = question.answers.create(content: question.id.to_s + " This is an answer to respective question", user_id: 1)
		Comment.create!(body: "Comment goes here", answer_id: answer.id, user_id: 1)
		j = j + 1
	end
	i = i + 1
end