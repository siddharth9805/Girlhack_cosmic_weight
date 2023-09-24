document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Mercury-Image");
    let theMenu = document.getElementById("Mercury-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Venus");
    let theMenu = document.getElementById("Venus-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Earth");
    let theMenu = document.getElementById("Earth-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Mars");
    let theMenu = document.getElementById("Mars-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Jupiter");
    let theMenu = document.getElementById("Jupiter-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Saturn");
    let theMenu = document.getElementById("Saturn-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Uranus");
    let theMenu = document.getElementById("Uranus-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Neptune");
    let theMenu = document.getElementById("Neptune-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("fired");
    let myImg = document.getElementById("Pluto");
    let theMenu = document.getElementById("Pluto-my-menu");
    let isVisible = false;
    myImg.addEventListener("click", () => {
        // On click, open a menu that displays Venus data
        console.log("clicked");
        if(isVisible) {
            theMenu.style.display = "none";
            isVisible = false;
        }
        else {
            theMenu.style.display = "flex";
            isVisible = true;
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var apiResponseElement = document.getElementById('Mercury-my-form');

    // Define the data to send in the POST request
    var data = new FormData(apiResponseElement);

    // Make a POST request to the API
    fetch('http://127.0.0.1:8000/api/planet_weight/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    })
        .then(response => response.json())
        .then(data => {
            apiResponseElement.textContent = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
