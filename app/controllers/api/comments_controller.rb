class Api::AnswersController < Api::ApiController

	def create
		@comment = Comment.new(comment_params)
		@comment.user_id = current_user.id 

		if @comment.save 
			render json: @comment 
		else
			render json: @comment.errors.full_messages, status: :unprocessable_entity
		end
	end

	def destroy
		@comment = Comment.find(params[:id])
		@comment.destroy
		render json: {}
	end

	def index
		@comments = Comment.all 
		render json: @comments
	end

	def show
		@comment = Comment.find(params[:id])
		render json: @comment
	end

	private

	def comment_params
		params.require(:comment).permit(:body, :answer_id)
	end
end