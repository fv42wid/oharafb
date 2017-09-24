Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/home', to: 'pages#home'
  get '/roster', to: 'pages#roster'

  root 'pages#home'

end
