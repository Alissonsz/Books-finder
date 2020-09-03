Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get '/search_book', to: 'books#search'
    end
  end

  get '*path', to: 'pages#index', via: :all
end
