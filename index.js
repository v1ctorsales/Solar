document.querySelector(".txtsol").addEventListener("mouseover",()=>handleHover())
document.querySelector(".txtsol").addEventListener("mouseout",()=>mouseFora())

function mouseFora(){
    for(x=0;x<8;x++){
        document.querySelectorAll(".orbita img")[x].classList.add("visivel");
    }
}

function handleHover(){
    for(x=0;x<8;x++){
    document.querySelectorAll(".orbita img")[x].classList.add("invisivel");
}
}