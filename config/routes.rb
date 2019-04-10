Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  devise_for :users
  
  resources :polls, only: :index
  resources :answers, only: :create
  
  get '/:slug', to: 'answers#new'
  
  root "answers#new"
end
