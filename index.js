let submitEl = document.getElementById('submit-el')
let numberEl = document.getElementById('number-el')
let feedbackEl = document.getElementById('feedback-el')
let myRatings = [4]


for (let i=0; i < myRatings.length; i++) {
        feedbackEl.innerHTML += `<p> You selected ${myRatings[0]} out of 5 </p>`   
}
  
    
function submit() {
    window.location.href = "test.html";
}