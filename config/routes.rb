Rails.application.routes.draw do
 
 root to: 'static_pages#root'

 resources :users, only: [:new, :create]
 resource :session, only: [:new, :create, :destroy]

 namespace :api do 
 	resources :questions, except: :new
 	# resources :users, only: [:index, :show]
 end
end
