const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const IMAGES = [
    { filePath: "./images/pic1.jpg", altText: "pic1.jpg" },
    { filePath: "./images/pic2.jpg", altText: "pic2.jpg" },
    { filePath: "./images/pic3.jpg", altText: "pic3.jpg" },
    { filePath: "./images/pic4.jpg", altText: "pic4.jpg" },
    { filePath: "./images/pic5.jpg", altText: "pic5.jpg" },
]

for (let i = 0; i<IMAGES.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', IMAGES[i].filePath);
    newImage.setAttribute('alt', IMAGES[i].altText);
    
    newImage.addEventListener("click", ()=>{
        displayedImage.src = IMAGES[i].filePath;
    })

    newImage.addEventListener("mouseover", ()=>{
        newImage.style.opacity = "0.7";
    })
    newImage.addEventListener("mouseout", ()=>{
        newImage.style.opacity = "1.0";
    })
    
    thumbBar.appendChild(newImage);
}

let isDark= false;
btn.addEventListener("click", ()=>{
    if(isDark){
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        isDark=false;
    }else{
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        isDark=true;
    }
})