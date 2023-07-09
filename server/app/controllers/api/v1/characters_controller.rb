class Api::V1::CharactersController < ApplicationController
  # GET /characters
  def index
    @map = Map.find(params[:map_id])
    @characters = @map.characters

    render json: @characters
  end

  # GET /characters/1
  def show
    @map = Map.find(params[:map_id])
    @character = @map.characters.find(params[:id])

    render json: @character
  end
end
