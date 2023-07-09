class Api::V1::ScoresController < ApplicationController
  # GET /scores
  def index
    @map = Map.find(params[:map_id])
    @scores = @map.scores

    render json: @scores
  end

  # GET /scores/1
  def show
    @map = Map.find(params[:map_id])
    @score = @map.scores.find(params[:id])

    render json: @score
  end

  # POST /scores
  def create
    @map = Map.find(params[:map_id])
    @score = @map.scores.build(score_params)

    if @score.save
      render json: @score, status: :created, location: api_v1_map_score_url(@map, @score)
    else
      render json: @score.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def score_params
      params.require(:score).permit(:player_name, :seconds, :map_id)
    end
end
