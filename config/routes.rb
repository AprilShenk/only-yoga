Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/poses/:pose_id/logs/:id', to: 'logs#add_pose'

  resources :users, only: :create

  resources :poses
  resources :logs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
