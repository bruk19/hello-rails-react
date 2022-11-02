# frozen_string_literal: true

Rails.application.routes.draw do
  root 'statics#index'

  namespace :api do
    namespace :v1 do
      resources :greeting
    end
  end
  get '/api/messages', to: 'statics#greeting'
end
