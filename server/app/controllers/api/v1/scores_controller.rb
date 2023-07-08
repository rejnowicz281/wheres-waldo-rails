class Api::V1::ScoresController < ApplicationController
  # GET /scores
  def index
    @scores = Score.all

    render json: @scores
  end

  # GET /scores/1
  def show
    @score = Score.find(params[:id])

    render json: @score
  end

  # POST /scores
  def create
    @score = Score.new(score_params)

    if @score.save
      render json: @score, status: :created, location: @score
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
