class UserServices
  include HTTParty

  def initialize
    production_url = 'http://192.168.0.1'
    development_url = 'http://localhost:3200'
    @format = 'JSON'
    @version = '1.0'
    @api_uri = Rails.env == 'production' ? production_url : development_url
    self.class.base_uri @api_uri
  end

  def auth(email, image)
    query_params = { email: email }
    body = { image: image }
    request_api('/rest/verify_user/', 'POST', query_params, body)
  end

  def request_api(endpoint, request_method, query_params = {}, body = {})
    url = "#{self.class.base_uri}#{endpoint}#{query_params[:email]}"
    self.class.send(request_method.downcase, url, body: body)
  end
end
