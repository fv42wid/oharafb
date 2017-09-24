class PagesController < ApplicationController

  def home
    @upcoming_games = Game.last(4)
    @stories = Story.last(3)
  end

  def roster

  end
end