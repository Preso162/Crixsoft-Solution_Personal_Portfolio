const navbar = document.getElementById("navbar");
const navItems = document.getElementById("Navitems");
const menuToggle = document.getElementById("menuToggle");
const progressBar = document.getElementById("progress-bar");

// =================================
// DOM Elements
// =================================
console.log("Script loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {

    /* Footer Year */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

// =================================
// Hero Typing Animation
// =================================

    const typing = document.getElementById("typing");

    const words = [
        "Frontend Developer",
        "Java Developer",
        "Web Designer",
        "Problem Solver"
    ];

    let wordIndex = 0;

    function changeWord() {
        typing.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
    }

    if (typing) {
        changeWord();
        setInterval(changeWord, 2500);
    }

// =================================
// Intersection Observer
// =================================
    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    hiddenElements.forEach((element) => {

        observer.observe(element);

    });

// =================================
// Progress Bar
// =================================
    const progressBars = document.querySelectorAll(".progress");

const skillsObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.width =
                getComputedStyle(entry.target)
                .getPropertyValue("--progress-width");
            skillsObserver.unobserve(entry.target);
        }
    });
});

// =================================
// Scroll Progress Bar
// =================================
progressBars.forEach((bar) => {
    skillsObserver.observe(bar);
});

    /* Sticky Header */

    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");

            } else {
                header.classList.remove("scrolled");
            }
        });
    }
});

// =================================
// Intersection Observer
// =================================
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{
        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let current = 0;
            const increment = target / 80;
            const updateCounter = ()=>{

                if(current < target){
                    current += increment;
                    counter.textContent =
                    Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                }else{
                    counter.textContent = target + "+";
                }
            };
            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
});

// =================================
// Counter Animation
// =================================

counters.forEach(counter=>{
    counterObserver.observe(counter);
});

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
});

function animateCounter(id, endValue) {
    const counter = document.getElementById(id);
    let current = 0;
    const timer = setInterval(() => {
        current++;
        counter.textContent = current;
        if (current >= endValue) {
            clearInterval(timer);
        }
    }, 120);
}

animateCounter("projectCount",8);
animateCounter("techCount",12);

const developer = {
projects:8,
technologies:12,
experience:15,
coffee:"∞"
}

// =================================
// Contact Form Field
// =================================

const form = document.querySelector(".form-field");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let valid = true;

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value.trim())){

    valid = false;

    const button =
    document.querySelector(".sendMessage-btn");

    button.textContent = "Sending...";
    }
});

