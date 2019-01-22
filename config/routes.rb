Rails.application.routes.draw do
  devise_for :users
  
  resources :polls, shallow: true do
    resources :questions, shallow: true do
      resources :choices
    end
  end
  
  resources :answers, only: :create
  
  get 'pages/home'
  get '/:slug', to: 'answers#new'
  
  root "pages#home"
end
