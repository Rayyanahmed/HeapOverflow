class Question < ActiveRecord::Base
	validates :title, :content, presence: true 
	belongs_to :user, dependent: :destroy
	
	has_many(
		:answers,
		class_name: :Answer,
		foreign_key: :question_id,
		primary_key: :id,
		dependent: :destroy
		)
end
