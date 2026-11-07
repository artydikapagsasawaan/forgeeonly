
const opening = document.getElementById("opening");
const music = document.getElementById("music");
const main = document.getElementById("main");

function openWebsite() {

    music.volume = 0.35;

    music.play().catch(error => {
        console.log("Music could not play:", error);
    });

    opening.style.opacity = "0";

    setTimeout(() => {
        opening.style.display = "none";
        main.style.display = "block";
        window.scrollTo(0, 0);
    }, 1000);
}


// SECOND LETTER ENVELOPE

function openSecondLetter() {

    const wrapper = document.querySelector(".envelope-wrapper");
    const button = document.getElementById("envelopeButton");

    wrapper.classList.toggle("open");

    const isOpen = wrapper.classList.contains("open");

    button.innerHTML = isOpen
        ? "Close"
        : "Open";

    button.setAttribute("aria-expanded", isOpen);
}


// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["♡", "♥", "❀", "💚"];

    heart.innerHTML = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 800);