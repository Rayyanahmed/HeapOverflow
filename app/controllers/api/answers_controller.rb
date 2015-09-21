class Api::AnswersController < Api::ApiController

	def create
	end

	def index
		@answers = Answer.all
		render json: @answers
	end

	def destroy
	end

	private



	def answer_params
	end
end