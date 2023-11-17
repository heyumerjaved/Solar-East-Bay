
document.addEventListener("DOMContentLoaded", function () {
    var playBtn = document.getElementById("header-play-btn");
    var headerItems = document.querySelector(".hero");
    // var headerImage = document.querySelector(".hdr-img");
    var headerVideo = document.querySelector(".header-video");
    var close = document.getElementById("close-vid")

    playBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // headerImage.style.display="none";
        headerItems.style.display="none";
        headerVideo.style.display="block";
        headerVideo.play();
        close.style.display="inline";
    });

    close.addEventListener("click",function(event){
        event.preventDefault();
        // headerImage.style.display="block";
        headerItems.style.display="";
        headerVideo.style.display="none";
        headerVideo.pause(); 
        close.style.display="none";

    });

    window.addEventListener("scroll", function (event) {
        event.preventDefault();
        headerImage.style.display="block";
        headerItems.style.display="flex";
        headerVideo.style.display="none";
        headerVideo.pause(); 
        close.style.display="none";
      });
});

document.addEventListener("DOMContentLoaded", function () {
    var secImg= document.getElementById("sec-img-vid");
    var closeBtnSec = document.getElementById("close-vid-sec");
    var secVideo = document.querySelector(".footer-video");
    var platBtnSec = document.querySelector(".play-btn-sec")

    platBtnSec.addEventListener("click", function (event) {
        event.preventDefault();
        secImg.style.display="none";
        secVideo.style.display="block";
        secVideo.play();
        platBtnSec.style.display="none";
        closeBtnSec.style.display="inline";
    });
    closeBtnSec.addEventListener("click", function (event) {
        event.preventDefault();
        secImg.style.display="block";
        secVideo.style.display="none";
        platBtnSec.style.display="block";
        secVideo.pause();
        closeBtnSec.style.display="none";
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollToSrvcsLink = document.getElementById("scrollToSrvcs");
    var srvcsDiv = document.querySelector(".srvcs");

    scrollToSrvcsLink.addEventListener("click", function (event) {
        event.preventDefault();
        srvcsDiv.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollToSrvcsLink = document.getElementById("scrollToAbout");
    var srvcsDiv = document.getElementById("about");

    scrollToSrvcsLink.addEventListener("click", function (event) {
        event.preventDefault();
        srvcsDiv.scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var changeBgElement = document.getElementById("change-bg-element");

    window.addEventListener("scroll", function () {
        var scrollTop = window.scrollY;
        var threshold = 1; // Scroll position where you want to change the background color

        if (scrollTop >= threshold) {
            changeBgElement.style.backgroundColor = "#353D50"; // Change to your desired color
        } else {
            changeBgElement.style.backgroundColor = "transparent"; // Reset to the original color
        };
    });
});

function scrollToContact() {
    // Get the .contact element
    const contactElement = document.querySelector('.contact');
    var mobileNav = document.getElementById("mbl-nav");
    var menuIcon = document.getElementById("menu-icon");

    // Check if the element exists on the page
    if (contactElement) {
        // Scroll to the .contact element
        contactElement.scrollIntoView({ behavior: 'smooth' });
        mobileNav.classList.remove("active");
        menuIcon.src = "./images/menu-ico.svg";
        document.body.style.overflow = "";
    } else {
        console.error('.contact element not found!');
    };
};


function toggleMenu() {
    var menuButton = document.getElementById("menu-btn");
    var mobileNav = document.getElementById("mbl-nav");
    var menuIcon = document.getElementById("menu-icon");

    mobileNav.classList.toggle("active");
    menuIcon.src = mobileNav.classList.contains("active")
        ? "./images/cancel.svg"
        : "./images/menu-ico.svg";

    // Disable or enable scroll based on menu's active state
    if (mobileNav.classList.contains("active")) {
        document.body.style.overflow = "hidden"; // Disable scroll
    } else {
        document.body.style.overflow = ""; // Enable scroll
    }
}

// Automatically hide menu for screens larger than 640px
function hideMenuOnLargeScreens() {
    var screenWidth = window.innerWidth;
    var mobileNav = document.getElementById("mbl-nav");

    if (screenWidth > 640 && mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
        document.getElementById("menu-icon").src = "./images/menu-ico.svg";
        document.body.style.overflow = ""; // Enable scroll
    }
}

// Example usage:
var menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", toggleMenu);

// Event listener to handle screen resize
window.addEventListener("resize", hideMenuOnLargeScreens);

// Automatically hide menu on page load for screens larger than 640px
hideMenuOnLargeScreens();


const faq = document.querySelectorAll(".faq");


faq.forEach(faq =>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq__icon img');

        icon.classList.toggle("active");
        icon.src = icon.classList.contains("active")
            ? "./minus.svg"
            : "./plus.svg";

        // if(faq.classList.contains = "open"){
        //     icon.src = "./minus.svg";
        // }else{
        //     icon.src =  "./plus.svg";
        // }

    })
})