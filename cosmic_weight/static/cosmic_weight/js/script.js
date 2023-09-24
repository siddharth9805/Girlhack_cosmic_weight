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
    let myImg = document.getElementById("Venus-Image");
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
    let myImg = document.getElementById("Earth-Image");
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
    let myImg = document.getElementById("Mars-Image");
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
    let myImg = document.getElementById("Jupiter-Image");
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
    let myImg = document.getElementById("Saturn-Image");
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
    let myImg = document.getElementById("Uranus-Image");
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
    let myImg = document.getElementById("Neptune-Image");
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
    let myImg = document.getElementById("Pluto-Image");
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
    document.getElementById("Mercury-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_merc_i").value;
        var apiResponseElement = document.getElementById("weight_merc_p");
        var obj = {"weight": merc_weight, "planet": "mercury"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/mercury', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_merc").textContent = obj.name;
            document.getElementById("json_peri_merc").textContent = obj.perihelion;
            document.getElementById("json_ap_merc").textContent = obj.aphelion;
            document.getElementById("json_gravity_merc").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Venus-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_venus_i").value;
        var apiResponseElement = document.getElementById("weight_venus_p");
        var obj = {"weight": merc_weight, "planet": "venus"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/venus', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_venus").textContent = obj.name;
            document.getElementById("json_peri_venus").textContent = obj.perihelion;
            document.getElementById("json_ap_venus").textContent = obj.aphelion;
            document.getElementById("json_gravity_venus").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Earth-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_earth_i").value;
        var apiResponseElement = document.getElementById("weight_earth_p");
        var obj = {"weight": merc_weight, "planet": "earth"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/earth', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_earth").textContent = obj.name;
            document.getElementById("json_peri_earth").textContent = obj.perihelion;
            document.getElementById("json_ap_earth").textContent = obj.aphelion;
            document.getElementById("json_gravity_earth").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Mars-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_mars_i").value;
        var apiResponseElement = document.getElementById("weight_mars_p");
        var obj = {"weight": merc_weight, "planet": "mars"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/mars', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_mars").textContent = obj.name;
            document.getElementById("json_peri_mars").textContent = obj.perihelion;
            document.getElementById("json_ap_mars").textContent = obj.aphelion;
            document.getElementById("json_gravity_mars").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Jupiter-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_jupiter_i").value;
        var apiResponseElement = document.getElementById("weight_jupiter_p");
        var obj = {"weight": merc_weight, "planet": "venus"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/jupiter', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_jupiter").textContent = obj.name;
            document.getElementById("json_peri_jupiter").textContent = obj.perihelion;
            document.getElementById("json_ap_jupiter").textContent = obj.aphelion;
            document.getElementById("json_gravity_jupiter").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Saturn-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_saturn_i").value;
        var apiResponseElement = document.getElementById("weight_saturn_p");
        var obj = {"weight": merc_weight, "planet": "saturn"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/saturn', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_saturn").textContent = obj.name;
            document.getElementById("json_peri_saturn").textContent = obj.perihelion;
            document.getElementById("json_ap_saturn").textContent = obj.aphelion;
            document.getElementById("json_gravity_saturn").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Uranus-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_uranus_i").value;
        var apiResponseElement = document.getElementById("weight_uranus_p");
        var obj = {"weight": merc_weight, "planet": "uranus"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/uranus', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_uranus").textContent = obj.name;
            document.getElementById("json_peri_uranus").textContent = obj.perihelion;
            document.getElementById("json_ap_uranus").textContent = obj.aphelion;
            document.getElementById("json_gravity_uranus").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Neptune-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_neptune_i").value;
        var apiResponseElement = document.getElementById("weight_neptune_p");
        var obj = {"weight": merc_weight, "planet": "neptune"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/neptune', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_neptune").textContent = obj.name;
            document.getElementById("json_peri_neptune").textContent = obj.perihelion;
            document.getElementById("json_ap_neptune").textContent = obj.aphelion;
            document.getElementById("json_gravity_neptune").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Pluto-my-form").addEventListener("submit", (event) => 
    {
        event.preventDefault();

        // Get value from input BOX
        var merc_weight = document.getElementById("weight_pluto_i").value;
        var apiResponseElement = document.getElementById("weight_pluto_p");
        var obj = {"weight": merc_weight, "planet": "pluto"};
        
        // Make a POST request to the API
        fetch('http://127.0.0.1:8000/api/planet_weight/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj),
        })
        .then(response => response.json())
        .then(obj => {
            apiResponseElement.textContent = obj.weight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        fetch('http://127.0.0.1:8000/api/pluto', 
        {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(obj => {
            document.getElementById("json_name_pluto").textContent = obj.name;
            document.getElementById("json_peri_pluto").textContent = obj.perihelion;
            document.getElementById("json_ap_pluto").textContent = obj.aphelion;
            document.getElementById("json_gravity_pluto").textContent = obj.gravity;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});