

const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.popup-close');


document.querySelectorAll('.clickable-drawing-image').forEach(img => {
    img.addEventListener('click',() => {
        popupImg.src = img.src;
        popup.style.display = 'flex'
    });
});

closeBtn.addEventListener('click', () =>{
    popup.style.display ='none'
})



document.addEventListener("DOMContentLoaded",() =>{
    const digitalThumbnails = document.querySelectorAll(".thumbnail");
    const digitalPopup = document.getElementById("digital-image-popup");
    const digitalVideo = document.getElementById("digital-popup-video");
    const closeDigitalPopup = document.getElementById("digital-popup-close");

    digitalThumbnails.forEach(video =>{
        video.addEventListener("click",() =>{
            digitalVideo.src = video.getAttribute("src");
            digitalPopup.style.display ="flex";
            digitalVideo.play();
        });
    });

    closeDigitalPopup.addEventListener("click" , () =>{
        digitalPopup.style.display = "none";
        digitalVideo.pause();
        digitalVideo.src = "";

    });

    digitalPopup.addEventListener("click", (e) =>{
        if (e.target === digitalPopup){
            closeDigitalPopup.click();
        }
    });
});


