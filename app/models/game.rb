require 'json'
require 'open-uri'
# require 'dotenv'

url = "https://dictionaryapi.com/api/v3/references/collegiate/json/favor?key=ac861c65-0f06-4568-a306-cde44e820298"

word_def_serialized = URI.open(url).read
word_def = JSON.parse(word_def_serialized)
word_def[0]['shortdef'].nil?


class Game < ApplicationRecord

  # def initialize
  #   url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json"
  #   word_serialized = URI.open(url).read
  #   word = JSON.parse(word_serialized)
  #   @center_letter = 'a'
  #   @other_letters = 'ehlpuv'
  #   @filtered_words = []
  #   letters = center_letter + other_letters
  #   word.each_key do |key|
  #     if (key.include? center_letter) && (/^[#{letters}]{4,}$/ === key)
  #       @filtered_words << key
  #     end
  #   end
  #   @num_of_words = @filtered_words.length
  # end

  # def word_list_check
  #   Dotenv.load
  #   # binding.pry
  #   puts 'definition to lookup'
  #   lookup = gets.chomp
  #   url = "https://dictionaryapi.com/api/v3/references/collegiate/json/#{lookup}?key=#{ENV['DICTIONARY_API_KEY']}"
  #   word_def_serialized = URI.open(url).read
  #   word_def = JSON.parse(word_def_serialized)
  #   if word_def[0].nil? || word_def[0]['shortdef'].nil?
  #     p 'this word does not exist'
  #   else
  #     print word_def[0]['shortdef']
  #   end
  # end
end
