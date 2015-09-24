class Answer < ActiveRecord::Base
	validates :content, :question_id, :user_id, presence: true 
	belongs_to :question
	belongs_to :user

	has_many(
		:comments,
		class_name: :Comment,
		foreign_key: :answer_id,
		primary_key: :id,
		dependent: :destroy
		)
	has_many :votes, as: :votable
end
