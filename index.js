document.querySelectorAll(".navul li")[0].addEventListener("mouseover",()=>handleHoverSOL())
document.querySelectorAll(".navul li")[0].addEventListener("mouseout",()=>mouseForaSOL())

function mouseForaSOL(){
    for(x=0;x<8;x++){
        document.querySelectorAll(".orbita img")[x].classList.remove("invisivel");
    }
}

function handleHoverSOL(){
    for(x=0;x<8;x++){
    document.querySelectorAll(".orbita img")[x].classList.add("invisivel");
}
}

// Mercurio

document.querySelectorAll(".navul li")[1].addEventListener("mouseover",()=>handleHoverMER())
document.querySelectorAll(".navul li")[1].addEventListener("mouseout",()=>mouseForaMER())

function mouseForaMER(){
    for(x=1;x<8;x++){
        document.querySelectorAll(".orbita img")[x].classList.remove("invisivel");
    }
}

function handleHoverMER(){
    for(x=1;x<8;x++){
    document.querySelectorAll(".orbita img")[x].classList.add("invisivel");
}
}

// Venus

document.querySelectorAll(".navul li")[2].addEventListener("mouseover",()=>handleHoverVEN())
document.querySelectorAll(".navul li")[2].addEventListener("mouseout",()=>mouseForaVEN())

function mouseForaVEN(){
    document.querySelectorAll(".orbita img")[0].classList.remove("invisivel");
    for(x=2;x<8;x++){
        document.querySelectorAll(".orbita img")[x].classList.remove("invisivel");
    }
}

function handleHoverVEN(){
    document.querySelectorAll(".orbita img")[0].classList.add("invisivel");
    for(x=2;x<8;x++){
    document.querySelectorAll(".orbita img")[x].classList.add("invisivel");
}
}

// Terra

document.querySelectorAll(".navul li")[3].addEventListener("mouseover",()=>handleHoverTER())
document.querySelectorAll(".navul li")[3].addEventListener("mouseout",()=>mouseForaTER())

function mouseForaTER(){
    document.querySelectorAll(".orbita img")[0].classList.add("invisivel");
    document.querySelectorAll(".orbita img")[1].classList.remove("invisivel");
    for(x=3;x<8;x++){
        document.querySelectorAll(".orbita img")[x].classList.remove("invisivel");
    }
}

function handleHoverTER(){
    document.querySelectorAll(".orbita img")[0].classList.add("invisivel");
    document.querySelectorAll(".orbita img")[1].classList.add("invisivel");
    for(x=3;x<8;x++){
    document.querySelectorAll(".orbita img")[x].classList.add("invisivel");
}
}
