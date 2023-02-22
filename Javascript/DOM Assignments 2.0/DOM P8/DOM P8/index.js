// Task 1
const sideBar = document.getElementsByTagName('aside')[0]
sideBar.style.border = "4px solid red";
sideBar.style.overflowY = "Scroll"

const horizontalLine = document.createElement("hr");
horizontalLine.className = 'hr-line';
sideBar.appendChild(horizontalLine)

const heading = document.createElement("h2")
const para = document.createElement("p");
heading.textContent = 'This is my custom heading'
para.context = 'This is my custom paragraph';
sideBar.appendChild(heading)
sideBar.appendChild(para);
heading.className = "new-head";
para.className = 'new-p'

// Task 2
document.body.style.backgroundImage = "none";

// Task 3
const navbarToggle = document.querySelector(".navbar-toggler");
const collapseNavBar = document.getElementsByClassName('collapse')[0];
navbarToggle.addEventListener("click",()=>{
    collapseNavBar.style.display = "flex";
    navbarToggle.addEventListener("click",()=>{
        collapseNavBar.style.display = "none";
    })
})