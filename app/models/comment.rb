class Comment < ActiveRecord::Base
	validates :user_id, :answer_id, :body, presence: true 

	belongs_to :user
	belongs_to :answer
end
