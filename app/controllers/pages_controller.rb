class PagesController < ApplicationController

  def home
    @upcoming_games = Game.last(4)
  end
end