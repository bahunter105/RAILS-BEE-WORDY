// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["zero", "one", "two", "three", "four", "five", "center", "form", "progressbar", "rank"]

  // connect() {
  //   console.log('Shuffle')
  //   // this.outputTarget.textContent = 'Hello, Stimulus!'
  // }
  shuffle() {
    gon.letters.sort(() => (Math.random() > .5) ? 1 : -1);
    this.zeroTarget.innerText = gon.letters[0].toUpperCase();
    this.oneTarget.innerText = gon.letters[1].toUpperCase();
    this.twoTarget.innerText = gon.letters[2].toUpperCase();
    this.threeTarget.innerText = gon.letters[3].toUpperCase();
    this.fourTarget.innerText = gon.letters[4].toUpperCase();
    this.fiveTarget.innerText = gon.letters[5].toUpperCase();

    // if (this.toggleTarget.style.display == 'block')
    //   this.toggleTarget.style.display = 'none';
    // else
    //   this.toggleTarget.style.display = 'block';
  }
  enter() {
    const foundWord = this.formTarget.value.toLowerCase()
    if (gon.found_words.includes(foundWord)) {
      //  block of code to be executed if condition1 is true
      alert("word already found!")
    } else if (gon.filtered_words.includes(foundWord)) {
      alert("word exists!");
      gon.found_words.push(foundWord);
    }else {
      //  block of code to be executed if the condition1 is false and condition2 is false
      alert("word does not exist")
    }
    this.formTarget.value = ""
    document.querySelector(`#${foundWord}`).style.display = "block"
  }

  progressUpdate() {
    let perdone = (gon.found_words.length / gon.filtered_words.length) * 100
    let rank = ""
    if (perdone < 16) {
      rank = "Beginner";
    } else if (perdone >= 16 && perdone < 32) {
      rank = "Good"
    } else if (perdone >= 32 && perdone < 48) {
      rank = "Solid";
    } else if (perdone >= 48 && perdone < 64) {
      rank = "Great";
    } else if (perdone >= 64 && perdone < 80) {
      rank = "Amazing";
    } else if (perdone >= 80) {
      rank = "Genius";
    }

    this.progressbarTarget.style.width = `${perdone}%`
    this.rankTarget.innerHTML = `Rank: ${rank}`
  }

  typingZero() {
    this.formTarget.value += this.zeroTarget.innerHTML
  }
  typingOne() {
    this.formTarget.value += this.oneTarget.innerHTML
  }
  typingTwo() {
    this.formTarget.value += this.twoTarget.innerHTML
  }
  typingThree() {
    this.formTarget.value += this.threeTarget.innerHTML
  }
  typingFour() {
    this.formTarget.value += this.fourTarget.innerHTML
  }
  typingFive() {
    this.formTarget.value += this.fiveTarget.innerHTML
  }
  typingCenter() {
    this.formTarget.value += this.centerTarget.innerHTML
  }
  delete() {
    this.formTarget.value = this.formTarget.value.slice(0, -1)
  }

  preventDefault(event) {
    if (event.key == "Enter") {
      event.preventDefault();
      this.enter();
      this.progressUpdate();
    }else {
      console.log(`Key "${event.key}" repeating  [event: keydown]`);
    }
  }
}
