Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

resources :tutorials

get '/' => 'pages#index'
get '/welcome' => 'pages#index'
#get '/tutorials' => 'tutorials#new'
get '/admin' => 'tutorials#admin'
get '/react' => 'tutorials#react'
get '/learn' => 'tutorials#learn'
get '/seeadmin' => 'tutorials#seeadmin'
get '/trythis' => 'tutorials#trythis'

end