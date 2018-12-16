Rails.application.routes.draw do
  devise_for :users
  
  resources :polls
  resources :questions
  resources :choices
  
  get 'pages/home'
  get '/:slug', to: 'answers#new'
  
  root "pages#home"
end
