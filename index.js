const year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();

let images = [
    "images/image-one.jpeg",
    "images/image-two.jpeg",
    "images/image-three.jpeg",
    "images/image-four.jpeg",
];

const heroImages = document.getElementById("hero-images");
let index = 0;
heroImages.src = images[index];
const updateImage = () => {
    heroImages.src = images[index];
}

const prevImage = () => {
    index = (index - 1 + images.length) % images.length;
    updateImage();
}

const buttonOne = document.getElementById("btn-one");
buttonOne.addEventListener("click", prevImage);

const nextImage = () => {
    index = (index + 1) % images.length;
    updateImage();
}

const buttonTwo = document.getElementById("btn-two");
buttonTwo.addEventListener("click", nextImage);

setInterval(() => {
    nextImage();
}, 6000);

// Variables in js, let, var and const
// Datatypes in js
// functions in js

