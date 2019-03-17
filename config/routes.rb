Rails.application.routes.draw do
  devise_for :users
  
  resources :polls, only: :index
  resources :answers, only: :create
  
  get 'pages/home'
  get '/:slug', to: 'answers#new'
  
  root "pages#home"
end
