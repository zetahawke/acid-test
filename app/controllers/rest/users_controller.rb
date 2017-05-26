class Rest::UsersController < ApplicationController
  def login
    email = JSON.parse(params[:user])['email']
    image = JSON.parse(params[:user])['image']
    user = User.find_by(email: email)
    validate = (user.image == image)
    render json: { validate: validate, message: validate ? 'Ok' : 'No Autorizado' }, status: :ok
  rescue StandardError => e
    puts e.message
    render json: { validate: false, message: 'No Autorizado' }, status: 401
  end
end
