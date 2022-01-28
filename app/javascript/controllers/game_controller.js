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
  static targets = ["zero", "one", "two", "three", "four", "five", "center", "form"]

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
    console.log(this.zeroTarget.innerHTML)
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
}
