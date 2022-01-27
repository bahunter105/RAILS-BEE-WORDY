class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  require 'json'
  require 'open-uri'
  # require 'dotenv'

  def home
    # url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
    # word_serialized = URI.open(url).read
    # word = JSON.parse(word_serialized)

    # alf = ('a'..'z').to_a
    # @letters = alf.sample(7)
    @letters = ["b", "l", "f", "g", "e", "t", "p"]
    until (@letters.include?("a")||@letters.include?("e")||@letters.include?("i")||@letters.include?("o")||@letters.include?("u")||@letters.include?("y")) do
      @letters = alf.sample(7)
    end

    @prefiltered_words = []
    # word.each_key do |key|
    #   if (key.include? @letters[0]) && (/^[#{@letters}]{4,}$/ === key)
    #     @prefiltered_words << key
    #   end
    # end
    # word_list_check
    # @num_of_words = @filtered_words.length
    @words_and_def = {}
    @filtered_words = []
    @num_of_words = 1
    # binding.pry
  end

  def word_list_check
    @words_and_def = {}
    @prefiltered_words.each do |word|
      url = "https://dictionaryapi.com/api/v3/references/collegiate/json/#{word}?key=#{ENV['DICTIONARY_API_KEY']}"
      word_def_serialized = URI.open(url).read
      word_def = JSON.parse(word_def_serialized)
      unless word_def[0]['shortdef'].nil?
        @words_and_def[:"#{word}"] = word_def[0]['shortdef']
      end
    end
    @filtered_words = []
    @words_and_def.each_key do |key|
      @filtered_words << key
    end
  end
end
