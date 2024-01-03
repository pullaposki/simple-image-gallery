const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const themeToggleButton = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const IMAGES = [
    {filePath: "./images/pic1.jpg", altText: "pic1.jpg"},
    {filePath: "./images/pic2.jpg", altText: "pic2.jpg"},
    {filePath: "./images/pic3.jpg", altText: "pic3.jpg"},
    {filePath: "./images/pic4.jpg", altText: "pic4.jpg"},
    {filePath: "./images/pic5.jpg", altText: "pic5.jpg"},
];

const DEFAULT_OPACITY = "1.0";
const HOVER_OPACITY = "0.7";

for (let i = 0; i < IMAGES.length; i++) {
    const newImage = createNewImage(IMAGES[i]);
    thumbBar.appendChild(newImage);
}

let isThemeDark = false;

themeToggleButton.addEventListener("click", changeTheme);

function createNewImage(image) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image.filePath);
    newImage.setAttribute('alt', image.altText);

    newImage.addEventListener("click", () => setImage(image.filePath));
    newImage.addEventListener("mouseover", () => setImageOpacity(newImage, HOVER_OPACITY));
    newImage.addEventListener("mouseout", () => setImageOpacity(newImage, DEFAULT_OPACITY));

    return newImage;
}

function setImage(filePath) {
    displayedImage.src = filePath;
}

function setImageOpacity(image, opacity) {
    image.style.opacity = opacity;
}

function changeTheme() {
    if (isThemeDark) {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        isThemeDark = false;
    } else {
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        isThemeDark = true;
    }
}