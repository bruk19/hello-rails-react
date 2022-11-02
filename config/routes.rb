# frozen_string_literal: true

Rails.application.routes.draw do
  root 'static#index'

  namespace :api do
    namespace :v1 do
      resources :greeting
    end
  end
  get '*path', to: 'static#index', via: :all
end
