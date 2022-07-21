class PlayersController < ApplicationController
  def create
    player = Player.create(player_param)
    render json: player
  end

  def index
    @players = Player.all
  
    render json: @players
  end

  private
  def player_param
    params.require(:player).permit(:time, :name, :image_id)
  end
end
