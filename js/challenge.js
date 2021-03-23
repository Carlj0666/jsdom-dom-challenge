// document.addEventListener("DOMContentLoaded", () => {
  
  //get the counter element
  const counter = document.getElementById("counter")

  // grab the current number
  const likesCount = document.querySelector(".likes")

  // Create plus button functionality
  const plusButton = document.getElementById("plus")
  // listen for click and reference increment as callback
  plusButton.addEventListener("click", incrementer)


  // Create minus button functionality
  const minusButton = document.getElementById("minus")
  // listen for click and reference decrement as callback
  minusButton.addEventListener("click", decrementer)

  // add like button that "likes" current number
  const heartButton = document.getElementById("heart")
  heartButton.addEventListener("click", liker)

  // Pause button and listener
  let pauseButton = document.getElementById("pause")
  pauseButton.addEventListener("click", stopTimer)

  let submitButton = document.getElementById("submit")
  submitButton.addEventListener("click", addComment)

  const currentComment = document.getElementById("list")

  const li = document.createElement("li");

  let counterEquals

    // favorited numbers
  const faveNums = {}

  const comments = {}

  //create stepper function to advance the "timer"
  function incrementStepper() {
    // let currentState = 0
    counterEquals = setInterval(incrementer, 1000)
    // return currentState
  }

  //create function tha increments the counter value
  function incrementer() {
    // grab the current number
    let currentNum = counter.innerText
    //update inner text, make sure to parseInt, 
    // this also increments the number
    counter.innerText = parseInt(currentNum) + 1
  }

  function decrementer() {
    // grab the current number
    let currentNum = counter.innerText
    //update inner text, make sure to parseInt, 
    // this also increments the number
    counter.innerText = parseInt(currentNum) - 1
  }


  // create like function
  function liker() {
    const currentCount = counter.innerText
    if (faveNums[currentCount]) {
      faveNums[currentCount] += 1
      document.getElementById(currentCount).innerText = `${currentCount} liked ${faveNums[currentCount]} times`
    } else {
      faveNums[currentCount] = 1
        // add new tag and populate with liked message when invoked via event Listener
    likesCount.innerHTML += `<li id=${currentCount}>${currentCount} liked ${faveNums[currentCount]} times</li>`
    }
  }
  

function stopTimer(event) {
  console.log(event)
  if (pauseButton.innerText === "pause") {
    pauseButton.innerText = "resume"
    clearInterval(counterEquals)
    plusButton.disabled = true
    minusButton.disabled = true
    heartButton.disabled = true
  } else {
    pauseButton.innerText = "pause"
    plusButton.disabled = false
    minusButton.disabled = false
    heartButton.disabled = false
    incrementStepper()
    }
  }

  function addComment(event) {
    event.preventDefault() //stop post
    const actualComment = document.getElementById("comment-input")
    console.log(event)
    const ulCreate = document.createElement("ul")
    ulCreate.innerText = actualComment.value
    const listElement = document.getElementById("list")
    listElement.innerHTML += `<li id=${actualComment}>${actualComment.value}</li>`
  }

incrementStepper()
