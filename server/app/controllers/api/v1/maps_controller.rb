class Api::V1::MapsController < ApplicationController
  # GET /maps
  def index
    @maps = associated_maps.all

    render json: @maps.map { |map| map_with_associations(map) }
  end

  # GET /maps/1
  def show
    @map = associated_maps.find(params[:id])

    render json: map_with_associations(@map)
  end

  private
  def associated_maps
    Map.includes(:characters, :scores)
  end

  def map_with_associations(map)
    map.as_json(include: [:characters, :scores])
  end
end
