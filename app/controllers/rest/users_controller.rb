class Rest::UsersController < ApplicationController
  def login
    email = JSON.parse(params[:user])['email']
    image = JSON.parse(params[:user])['image']
    ws_connection = UserServices.new
    response = ws_connection.auth(email, image)
    if response['validate']
      render json: { validate: response['validate'], message: 'Ok' }, status: :ok
    else
      render json: { validate: response['validate'], message: 'No Autorizado' }, status: 401
    end
  rescue StandardError => e
    puts e.message
    render json: { validate: false, message: 'No Autorizado' }, status: 401
  end
end
