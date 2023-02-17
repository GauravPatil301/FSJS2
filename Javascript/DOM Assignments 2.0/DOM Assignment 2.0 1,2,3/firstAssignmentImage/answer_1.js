//   Task 1
// adding li to ul

let ul = document.getElementsByTagName("ul")[0];
let hireMe = document.createElement("li");
hireMe.innerText="Hire Me";
ul.appendChild(hireMe)

// Hiding Social Media Icons
let icons = document.getElementsByTagName("ul")[1];
icons.style.display = "none";

// Task 2
//  Adding input text in search bar
let inputText = document.querySelector(".search-field > input");
inputText.placeholder = "Search My Project";

// Task 3
// Changing navagation bar menu name contact to Projects

const list = document.getElementsByTagName("ul")[0];
list.getElementsByTagName("li")[2].innerHTML='Projects';
list.getElementsByTagName("li")[3].innerHTML="";

const span = Array.from(document.querySelectorAll(".hero-left-section > p > span"))
span[1].innerHTML = "an Employee"
span[2].innerHTML = "iNeuron Intelligence Pvt. Ltd."

// Task 4
// Changing profile image
let profileImage = document.querySelector(".hero-right-section > img");
profileImage.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

// Task 5
let supportMebutton = document.querySelector(".hero-right-section-btns");
let btnsupport = document.createElement("button");
btnsupport.innerText = 'Support Me';
supportMebutton.appendChild(btnsupport);