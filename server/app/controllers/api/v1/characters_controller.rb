class Api::V1::CharactersController < ApplicationController
  # GET /characters
  def index
    @characters = Character.all

    render json: @characters
  end

  # GET /characters/1
  def show
    @character = Character.find(params[:id])

    render json: @character
  end
end
