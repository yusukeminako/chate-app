Rails.application.routes.draw do
  devise_for :users
  root "users#index"
  resources :users, only: [:index, :edit, :update] do
    collection do
      get :incrementalsearch
    end
  end
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
