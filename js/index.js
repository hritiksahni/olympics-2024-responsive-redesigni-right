
// navigation


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navi = document.querySelector(".navigation")
const scroll = document.querySelector("body")

const togglenav = () => {
    
    navi.classList.toggle("active");

}

const togglescroll = () => {
    scroll.classList.toggle("active")
}



mobile_nav.addEventListener("click", () => togglenav())

mobile_nav.addEventListener("click", () => togglescroll())


// timer 

const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 7,26).getTime();
const fourthOfJulyNextYear = new Date(year + 2, 7, 26).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if(month > 6) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }

// let diff = fourthOfJuly ;



  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);




// qna 


const qna = document.querySelectorAll(".question");

qna.forEach((question) => question.addEventListener("click", () => {

  if(question.parentNode.classList.contains("show"))  {

    question.parentNode.classList.toggle("show")

  }

  else {
    qna.forEach(question => question.parentNode.classList.remove("show"))

    question.parentNode.classList.add("show")
  }


}))




const tickets = document.querySelector(".qnabtnTC")
const ticketsmain = document.querySelector(".section-5-qna-tickets")


const education = document.querySelector(".qnabtnED")
const educationmain = document.querySelector(".section-5-qna-education")

const volunteers = document.querySelector(".qnabtnVL")
const volunteersmain = document.querySelector(".section-5-qna-volunteers")

const EndowmentFund = document.querySelector(".qnabtnEF")
const EndowmentFundmain = document.querySelector(".section-5-qna-EndowmentFund")

const Ceremony = document.querySelector(".qnabtnCM")
const Ceremonymain = document.querySelector(".section-5-qna-ceremony")



const toggletickets = () => {
    
  ticketsmain.classList.add("qnashow")
  educationmain.classList.remove("qnashow")
  volunteersmain.classList.remove("qnashow")
  EndowmentFundmain.classList.remove("qnashow")
  Ceremonymain.classList.remove("qnashow")


  tickets.classList.add("activeqna")
  education.classList.remove("activeqna")
  volunteers.classList.remove("activeqna")
  EndowmentFund.classList.remove("activeqna")
  Ceremony.classList.remove("activeqna")



}


const toggleeducation = () => {
    
  ticketsmain.classList.remove("qnashow")
  educationmain.classList.add("qnashow")
  volunteersmain.classList.remove("qnashow")
  EndowmentFundmain.classList.remove("qnashow")
  Ceremonymain.classList.remove("qnashow")


  tickets.classList.remove("activeqna")
  education.classList.add("activeqna")
  volunteers.classList.remove("activeqna")
  EndowmentFund.classList.remove("activeqna")
  Ceremony.classList.remove("activeqna")



  
}



const togglevolunteers = () => {
    
  ticketsmain.classList.remove("qnashow")
  educationmain.classList.remove("qnashow")
  volunteersmain.classList.add("qnashow")
  EndowmentFundmain.classList.remove("qnashow")
  Ceremonymain.classList.remove("qnashow")


  tickets.classList.remove("activeqna")
  education.classList.remove("activeqna")
  volunteers.classList.add("activeqna")
  EndowmentFund.classList.remove("activeqna")
  Ceremony.classList.remove("activeqna")



  
}


const toggleEndowmentFund = () => {
    
  ticketsmain.classList.remove("qnashow")
  educationmain.classList.remove("qnashow")
  volunteersmain.classList.remove("qnashow")
  EndowmentFundmain.classList.add("qnashow")
  Ceremonymain.classList.remove("qnashow")


  tickets.classList.remove("activeqna")
  education.classList.remove("activeqna")
  volunteers.classList.remove("activeqna")
  EndowmentFund.classList.add("activeqna")
  Ceremony.classList.remove("activeqna")



  
}



const toggleCeremony = () => {
    
  ticketsmain.classList.remove("qnashow")
  educationmain.classList.remove("qnashow")
  volunteersmain.classList.remove("qnashow")
  EndowmentFundmain.classList.remove("qnashow")
  Ceremonymain.classList.add("qnashow")


  tickets.classList.remove("activeqna")
  education.classList.remove("activeqna")
  volunteers.classList.remove("activeqna")
  EndowmentFund.classList.remove("activeqna")
  Ceremony.classList.add("activeqna")



  
}


tickets.addEventListener('click', () => toggletickets())
education.addEventListener('click', () => toggleeducation())
volunteers.addEventListener('click', () => togglevolunteers())
EndowmentFund.addEventListener('click', () => toggleEndowmentFund())
Ceremony.addEventListener('click', () => toggleCeremony())