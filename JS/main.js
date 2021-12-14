let toggleIcone = document.querySelector(".header .icon");
toggleIcone.addEventListener("click" ,() => {
    document.querySelector(".header nav ul").classList.toggle("non-active")
});
let imagesInterval , needToShowImage = 1;
function showImages() {
    if(!needToShowImage)return;
    needToShowImage = 0;
    let images = [] , counterImages = 0;
    for(let i = 1 ; i <=  9;i++)images.push(`imags/a${i}.jpg`)
    imagesInterval = setInterval(() => {
        document.querySelector(".header").style.backgroundImage = `url(${images[counterImages++ % images.length]})`}, 5000)
}
showImages();
// settings
// setting Maincolor
document.querySelector(".settings i").addEventListener("click" , () => {
    document.querySelector(".settings i").classList.toggle("fa-spin");
    document.querySelector(".settings").classList.toggle("active");
})
let colorsList = document.querySelectorAll(".settings .content .colors-list li");
colorsList.forEach((color) => {
    color.addEventListener("click" , (e) => {
        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);
        window.localStorage.setItem("mainColor" , e.target.dataset.color);
        document.querySelector(".settings .content .colors-list li.active").classList.remove("active");
        e.target.classList.add("active");
    })
})

window.addEventListener("load" , () => {
    let mainColor = window.localStorage.getItem("mainColor");
    if(mainColor !== null){
        document.documentElement.style.setProperty("--main-color" , mainColor);
        document.querySelector(".settings .content .colors-list li.active").classList.remove("active");
        colorsList.forEach((e) => {
            if(e.dataset.color == mainColor){
                e.classList.add("active");
                return ;
            }
        })
    }
});
// setting Randombackground
document.querySelectorAll(".settings .content .background-option span").forEach((ele) => {
    ele.addEventListener("click" , (e) => {
        if(e.target.innerHTML == "YES")
        showImages(),e.target.classList.add("active"),
        document.querySelectorAll(".settings .content .background-option span")[1].classList.remove("active");
        else e.target.classList.add("active"),
        document.querySelectorAll(".settings .content .background-option span")[0].classList.remove("active"),
        clearInterval(imagesInterval) , needToShowImage = 1;
        window.localStorage.setItem("showRandomImage" , e.target.innerHTML);
    })
})
window.addEventListener("load" ,() => {
    let showRandomImage = window.localStorage.getItem("showRandomImage");
    if(showRandomImage !== null) {
        document.querySelectorAll(".settings .content .background-option span")[0].classList.remove("active");
        if(showRandomImage == "YES")
        showImages() , document.querySelector(".settings .content .background-option span:first-of-type").classList.add("active");
        else clearInterval(imagesInterval) , needToShowImage = 1 ,
        document.querySelector(".settings .content .background-option span:last-of-type").classList.add("active");;
    }
})



// setting reset 
let reset = document.querySelector(".settings .reset-option span");
reset.addEventListener("click" , () => {
    window.localStorage.clear();
    window.location.reload();
})
let progresses = document.querySelectorAll("#our-skills .skills .row span");
window.addEventListener("scroll" , () => {
    if(window.scrollY >= document.querySelector("#our-skills").offsetTop - 300)
        progresses.forEach((e) => {
            e.style.width = e.dataset.goal;
        });
})




// show bullets Setting
let bulletsOptions = document.querySelectorAll(".settings .content .navBullets-option span");
bulletsOptions.forEach(bullet => {
    bullet.addEventListener("click" , (e) => {
        if(e.target.textContent == "YES")
            document.querySelector(".nav-bullets").classList.remove("hide");
        else
            document.querySelector(".nav-bullets").classList.add("hide");
        bulletsOptions.forEach((ele) => ele.classList.remove("active"));
        e.target.classList.add("active");
        window.localStorage.setItem("showBullets" , e.target.textContent);
    })
})
window.addEventListener("load" , () => {
    let showBullets = window.localStorage.getItem("showBullets");
    if(showBullets !== null) {
        bulletsOptions.forEach((ele) => ele.classList.remove("active"));
        if(showBullets == "YES"){
            document.querySelector(".nav-bullets").classList.remove("hide");
            document.querySelector(`.navBullets-option span:first-of-type`).classList.add("active");
        }
        else {
            console.log("no")
            document.querySelector(".nav-bullets").classList.add("hide");
            document.querySelector(`.navBullets-option span:last-of-type`).classList.add("active");
        }
    }
})

// create popup With The Image 
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener("click" , (e) => {
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";

        let popupImg = document.createElement("img");
        popupImg.className = "popupImg"
        popupImg.src = img.src;
        if(img.alt !== null){
            let imgHeading = document.createElement("h3");
            imgHeading.className = "imgHeading";
            imgHeading.textContent = img.alt;
            popupBox.appendChild(imgHeading);
        }
        
        popupBox.appendChild(popupImg);

        let closeButton = document.createElement("span");
        closeButton.textContent = "X";
        closeButton.className = "close";
        popupBox.append(closeButton);
        document.body.appendChild(popupBox);
    });
});
document.addEventListener('click' , e => {
    let target = e.target.className;
    if(target == "close" || target == "popup-overlay"){
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-overlay").remove();
    };
} );

let allBullets = document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach(bullet => {
    bullet.addEventListener("click" , (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });
    });
});