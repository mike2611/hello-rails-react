class V1::GreetingController < ApplicationController
  def index
    render json: Greeting.all
  end
end
