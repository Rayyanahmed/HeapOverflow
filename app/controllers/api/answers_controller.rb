class Api::AnswersController < Api::ApiController

	def create
		@answer = current_question.answers.new(answer_params)
		@answer.user_id = current_user.id 

		if @answer.save 
			render json: @answer 
		else
			render json: @answer.errors.full_messages, status: :unprocessable_entity
		end
	end

	def index
		@answers = Answer.all
		render json: @answers
	end

	def destroy
	end

	private

	def current_question
		if params[:id]
			@answer = Answer.find(params[:id])
			@question = @answer.question 
		elsif params[:answer]
			@question = Question.find(params[:answer][:question_id])
		end
	end

	def answer_params
		params.require(:answer).permit(:content)
	end
end