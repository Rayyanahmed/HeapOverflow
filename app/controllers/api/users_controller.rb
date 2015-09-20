class Api::QuestionsController < Api::ApiController

	def index
		@user = User.all 
		render json: @users 
	end

	def show
		@user = User.find(params[:id])
		render json: @question
	end
end