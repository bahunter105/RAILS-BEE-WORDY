class GamesController < ApplicationController

  def index
    new_game

    # need to add the letters to the new game and then save it.
    # might need to create a table for words and definitions.

    alf = ('a'..'z').to_a
    alf.sample(7)
    (alf1.include?("a")||alf1.include?("e")||alf1.include?("i")||alf1.include?("o")||alf1.include?("u")||alf1.include?("y"))
  end

  def new_game
    if Game.last.created_at.strftime("%d/%m/%Y") == Date.today.strftime("%d/%m/%Y")
      @game = Game.last
    else
      @game = Game.new
    end
  end

end
