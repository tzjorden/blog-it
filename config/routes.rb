Rails.application.routes.draw do
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :articles, only: [:index, :show, :create, :destroy]
  resources :users, only: [:create, :index, :show, :destroy]
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/log_in", to: "session#create"
  delete "/logout", to: "session#destroy"
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
