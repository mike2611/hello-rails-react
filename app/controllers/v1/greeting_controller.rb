class V1::GreetingController < ApplicationController
  def index
    id = rand(1..Greeting.count)
    render json: Greeting.find(id)
  end
end
