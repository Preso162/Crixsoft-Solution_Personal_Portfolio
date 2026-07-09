const words = [

"Frontend Developer",

"Java Developer",

"Web Designer",

"Problem Solver"

];

let wordIndex = 0;

const typing = document.getElementById("typing");

function changeWord(){

typing.textContent = words[wordIndex];

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

changeWord();

setInterval(changeWord,2500);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach(el=>observer.observe(el));