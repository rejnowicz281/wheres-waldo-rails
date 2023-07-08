Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :maps, only: [:index, :show] do
        resources :characters, only: [:index, :show]
        resources :scores, only: [:index, :show, :create]
      end
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
