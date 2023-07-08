class Api::V1::MapsController < ApplicationController
  # GET /maps
  def index
    @maps = Map.includes(:characters).all

    render json: @maps.map { |map| map.as_json(include: :characters).merge(image_url: url_for(map.image)) }
  end

  # GET /maps/1
  def show
    @map = Map.includes(:characters).find(params[:id])

    render json: @map.as_json(include: :characters).merge(image_url: url_for(@map.image))
  end
end
