const typing = document.getElementById("typing");
const hiddenElements=document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(entries=>{

document.getElementById("year").textContent =
new Date().getFullYear();

const words = [

"Frontend Developer",
"Java Developer",
"Web Designer",
"Problem Solver"

];

let wordIndex = 0;

function changeWord(){

typing.textContent = words[wordIndex];

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

changeWord();

setInterval(changeWord,2500);

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el=>observer.observe(el));