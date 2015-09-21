Rails.application.routes.draw do
 
 root to: 'static_pages#root'

 resources :users, only: [:new, :create]
 resource :session, only: [:new, :create, :destroy]

 namespace :api, defaults: { format: :json } do
 	resources :questions, except: :new
 	# resources :users, only: [:index, :show]
 	resources :answers, only: [:index, :destroy, :new, :show]
 end
end
