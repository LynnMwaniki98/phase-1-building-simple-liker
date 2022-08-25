// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', ()=>{
const errorMessage = document.querySelector('#modal-message')
const removeHidden = document.querySelector('#modal')
const heartClick = document.querySelectorAll('.like-glyph')

heartClick.forEach(element => {
  element.addEventListener('click', () => {
    //Invoke mimicServerCall to simulate making a server request
    mimicServerCall()
    .then(() => {
      if (element.innerHTML === EMPTY_HEART){ //When the "server" returns a success status:
        element.innerHTML = FULL_HEART
        element.className = 'activated-heart'
      } else {
        element.innerHTML = EMPTY_HEART //Change the heart back to an empty heart
        element.className = 'activated-heart'
      }
    })
    //When the "server" returns a failure status:
    .catch(error => {
      removeHidden.classList.remove('hidden')
      errorMessage.innerHTML = error
      setTimeout(() => {
        removeHidden.classList.add('hidden')
        errorMessage.innerHTML = ''
      }, 3000)  //3000 is in milliseconds
    })
  })
})


})



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
