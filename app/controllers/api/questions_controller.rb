class Api::QuestionsController < Api::ApiController

	def create
		@question = Question.new(question_params)
		@question.user_id = current_user.id
		if @question.save
			render json: @question 
		else
			render json: @question.errors, status: :unprocessable_entity
		end
	end

	def index
		@questions = Question.all 
		render :index
	end

	def show
		@question = Question.find(params[:id])
		@answers = @question.answers 
		render :show
	end

	def destroy
		@question = Question.find(params[:id])
		if @question 
			@question.destroy
			render json: {}
		end
	end

	private

	def question_params
		params.require(:question).permit(:title, :content)
	end
end