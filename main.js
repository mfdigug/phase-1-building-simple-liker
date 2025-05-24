document.addEventListener('DOMContentLoaded', () => {
  

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//function likerFunction(){



function addEventListenerToHeartButton(){
  //get element
const buttons = document.getElementsByClassName('like-glyph')
  for(let btn of buttons){
    btn.addEventListener('click', (event) => {
      mimicServerCall()
       // handle successful response by altering the heart graphic
      .then((response) => {
        if (btn.innerText === "&#x2661;") {
          btn.innerText = "♥";
          btn.classList.add('activated-heart');
        } else if (btn.innerText === "♡"){
          btn.innerText = "♥";
          btn.classList.add('activated-heart');
        } else {
          btn.innerText = "♡"
          btn.classList.remove('activated-heart');
        }
     })
      // catch the server error
      .catch(function (error) {
        //remove hidden class on the error message modal
        const errorMessage = document.getElementById('modal');
        errorMessage.classList.remove("hidden");
        //use setTimeout to hide the modal after 3 seconds (readd the .hidden class)
        setTimeout(()=>{
          errorMessage.classList.add("hidden");
        } , 3000) 
      })
    })
    }
  }

addEventListenerToHeartButton();




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


})
