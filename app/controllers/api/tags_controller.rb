class Api::TagsController < Api::ApiController

	def show
		@tag = Tag.find(params[:id])
		render json: @tag
	end

	def index
		@tag = Tag.all 
		render json: @tags 
	end


	private

	
end