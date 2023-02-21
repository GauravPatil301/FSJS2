// changing background color of all headings inside accordian

const accordianHeading = Array.from(docuement.querySelectorAll(".accordian h3"));
accordianHeading.map((element)=>element.style.backgroundColor="#dadaf8");
const accordianPara = Array.from(document.querySelectorAll(".accordian p"));
accordianPara.map((element)=> element.style.backgroundColor = "#eeeeff");


// Adding skill accordianTag and accordianPara

const accordianWrapper = document.getElementsByClassName("accordian-wrapper")[0] 
const newAccordian = document.createElement("div");
accordianWrapper.appendChild(newAccordian)
newAccordian.classList.add("accordian")
const addSkillHeading = document.createElement("h3")
newAccordian.appendChild(addSkillHeading)
addSkillHeading.innerText = "Skills"
addSkill = document.createElement("p")
newAccordian.appendChild(addSkill);
addSkill.innerText = "I passes a very good command over the Full Stack Developement technologies like MERN which can be seen in my work over the Github."
