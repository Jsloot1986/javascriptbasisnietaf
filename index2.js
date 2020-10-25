let menuBtn = document.querySelector(".menu-btn");
let menuColor = document.querySelector(".menu-color");
let menuColorStatus = false;
let body = document.querySelector("body");

function toggleMenu(){
    if (menuColorStatus===false){
        menuColor.style.margin = "10px";
        menuColorStatus = true;
    }
    else if (menuColorStatus===true){
        menuColor.style.margin = "-300px";
        menuColorStatus = false;
    }
}
menuBtn.addEventListener("click", toggleMenu);

function changecolorBack() {
    if (body.classList.contains("home"))
        body.classList.remove("home");
    if (body.classList.contains("blauw"))
        body.classList.remove("blauw");
    if (body.classList.contains("groen"))
        body.classList.remove("groen");
    if (body.classList.contains("rood"))
        body.classList.remove("rood");
    if (body.classList.contains("roze"))
        body.classList.remove("roze")
}


function Changebackground(color){
    changecolorBack();
switch(color){
    case "home":
        body.classList.add("home");
    break;
    case "blauw":
        body.classList.add("blauw");
    break;
    case "groen":
        body.classList.add("groen");
    break;
    case "rood":
        body.classList.add("rood");
    break;
    case "roze":
        body.classList.add("roze");
}
}

