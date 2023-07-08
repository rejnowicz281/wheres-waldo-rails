class Api::V1::MapsController < ApplicationController
  # GET /maps
  def index
    @maps = Map.all

    render json: @maps
  end

  # GET /maps/1
  def show
    @map = Map.find(params[:id])

    render json: @map
  end
end
