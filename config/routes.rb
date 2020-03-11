Rails.application.routes.draw do
  devise_for :users
  root "users#index"
  resources :users, only: [:index, :edit, :update]
  # resources :messages, only: [:index]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
