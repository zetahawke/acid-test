Rails.application.routes.draw do
  root 'users#auth'

  resources :users do
    collection do
      get 'auth'
    end
  end

  namespace :rest, defaults: { format: :json } do
    post 'login', to: 'users#login'
  end
end
