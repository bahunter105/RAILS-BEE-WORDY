**Bee Wordy - Copy of NYT's Spelling Bee Game**

**My goal for this project:** *Get a better grip of Stimulus JS to create a fluid front-end experience.*

I’ve created a copy of the New York Time's Spelling Bee game. The original game gives users a set of 7 letters to create words. Words must be >3 letters and must include the letter placed in the center hexagon. Players are ranked based on the number of words found.

***Building the Backend with Ruby:***
To build the basic functionality, I utilized a publicly available JSON list of English words on Github. Upon loading the game, the app’s Ruby backend randomly selects 7 letters and ensures that at least one is a vowel. The app then reaches out to the JSON list and returns a list of filtered words that are >3 letters long, include the center letter and only contain the given set of letters.

I found that the JSON list contains some nonsensical words, so I pass the returned filtered words through the Merriam-Webster Dictionary API. The API authenticates the words and provides a definition that I show when the user finds the word. 

***Animating the Frontend with Stimulus JS:***
After building the html framework, I added Stimulus JS to bring the UI functionality to life.  The most challenging aspect was implementing a letter shuffler that randomizes letters upon the click of a button. For this, I utilized the GON gem to send the list of letters to a JS controller that randomizes the order and then re-inputs the letters back into the html. With Stimulus JS, I also added a progress bar that updates and word cards that are revealed when their corresponding words are found.

***Additional improvements for the next iteration:***
- Improve app startup speed by using Ruby on Rails/Sinatra to create an API that runs once a day to get the letter list, words and definitions. Then implement a  React frontend that fetches the API.
- Add a log-in to save a user’s performance over time.
- Add history that allows users to try puzzles and see the answers from other days.
