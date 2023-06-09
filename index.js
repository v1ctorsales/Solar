//Sol

document.querySelectorAll(".navul li")[0].addEventListener("mouseover",()=>handleHoverSOL())
document.querySelectorAll(".navul li")[0].addEventListener("mouseout",()=>mouseForaSOL())

function mouseForaSOL(){
    for(x=0;x<8;x++){
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverSOL(){
    for(x=0;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function solCard(){
    for(y=0;y<9;y++){
        document.querySelectorAll(".cardPlaneta")[y].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[y].classList.add("invisivel");
    }
    document.querySelectorAll(".cardPlaneta")[0].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[0].classList.add("visivel");
}

function solfecharCard(){
    document.querySelectorAll(".cardPlaneta")[0].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[0].classList.add("invisivel");
}

// Mercurio

document.querySelectorAll(".navul li")[1].addEventListener("mouseover",()=>handleHoverMER())
document.querySelectorAll(".navul li")[1].addEventListener("mouseout",()=>mouseForaMER())

function mouseForaMER(){
    for(x=1;x<8;x++){
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverMER(){
    for(x=1;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function mercurioCard(){
    for(y=0;y<9;y++){
        document.querySelectorAll(".cardPlaneta")[y].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[y].classList.add("invisivel");
    }
    document.querySelectorAll(".cardPlaneta")[1].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[1].classList.add("visivel");
}

function mercuriofecharCard(){
    document.querySelectorAll(".cardPlaneta")[1].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[1].classList.add("invisivel");
}

// Venus

document.querySelectorAll(".navul li")[2].addEventListener("mouseover",()=>handleHoverVEN())
document.querySelectorAll(".navul li")[2].addEventListener("mouseout",()=>mouseForaVEN())

function mouseForaVEN(){
    document.querySelectorAll(".orbita")[0].classList.remove("invisivel");
    for(x=2;x<8;x++){
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverVEN(){
    document.querySelectorAll(".orbita")[0].classList.add("invisivel");
    for(x=2;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function venusCard(){
    for(y=0;y<9;y++){
        document.querySelectorAll(".cardPlaneta")[y].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[y].classList.add("invisivel");
    }
    document.querySelectorAll(".cardPlaneta")[2].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[2].classList.add("visivel");
}

function venusfecharCard(){
    document.querySelectorAll(".cardPlaneta")[2].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[2].classList.add("invisivel");
}

// Terra

document.querySelectorAll(".navul li")[3].addEventListener("mouseover",()=>handleHoverTER())
document.querySelectorAll(".navul li")[3].addEventListener("mouseout",()=>mouseForaTER())

function mouseForaTER(){
    document.querySelectorAll(".orbita")[0].classList.remove("invisivel");
    document.querySelectorAll(".orbita")[1].classList.remove("invisivel");
    for(x=3;x<8;x++) {
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverTER(){
    document.querySelectorAll(".orbita")[0].classList.add("invisivel");
    document.querySelectorAll(".orbita")[1].classList.add("invisivel");
    for(x=3;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function terraCard(){
    for(y=0;y<9;y++){
        document.querySelectorAll(".cardPlaneta")[y].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[y].classList.add("invisivel");
    }
    document.querySelectorAll(".cardPlaneta")[3].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[3].classList.add("visivel");
}

function terrafecharCard(){
    document.querySelectorAll(".cardPlaneta")[3].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[3].classList.add("invisivel");
}

// Marte

document.querySelectorAll(".navul li")[4].addEventListener("mouseover",()=>handleHoverMAR())
document.querySelectorAll(".navul li")[4].addEventListener("mouseout",()=>mouseForaMAR())

function mouseForaMAR(){
    document.querySelectorAll(".orbita")[0].classList.remove("invisivel");
    document.querySelectorAll(".orbita")[1].classList.remove("invisivel");
    document.querySelectorAll(".orbita")[2].classList.remove("invisivel");
    for(x=4;x<8;x++) {
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverMAR(){
    document.querySelectorAll(".orbita")[0].classList.add("invisivel");
    document.querySelectorAll(".orbita")[1].classList.add("invisivel");
    document.querySelectorAll(".orbita")[2].classList.add("invisivel");
    for(x=4;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function marteCard(){
    for(y=0;y<9;y++){
        document.querySelectorAll(".cardPlaneta")[y].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[y].classList.add("invisivel");
    }
    document.querySelectorAll(".cardPlaneta")[4].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[4].classList.add("visivel");
}

function martefecharCard(){
    document.querySelectorAll(".cardPlaneta")[4].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[4].classList.add("invisivel");
}

// Jupiter

document.querySelectorAll(".navul li")[5].addEventListener("mouseover",()=>handleHoverJUP())
document.querySelectorAll(".navul li")[5].addEventListener("mouseout",()=>mouseForaJUP())

function mouseForaJUP(){
    for(x=0;x<4;x++){
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
    for(x=4;x<8;x++) {
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverJUP(){
    for(x=0;x<4;x++){
        document.querySelectorAll(".orbita")[x].classList.add("invisivel");
    }
    for(x=5;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function jupiterCard(){
    for(x=0;x<9;x++){
        document.querySelectorAll(".cardPlaneta")[x].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[x].classList.add("invisivel");
    }
    
    document.querySelectorAll(".cardPlaneta")[5].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[5].classList.add("visivel");
}

function jupiterfecharCard(){
    document.querySelectorAll(".cardPlaneta")[5].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[5].classList.add("invisivel");
}

//Saturno

document.querySelectorAll(".navul li")[6].addEventListener("mouseover",()=>handleHoverSAT())
document.querySelectorAll(".navul li")[6].addEventListener("mouseout",()=>mouseForaSAT())

function mouseForaSAT(){
    for(x=0;x<5;x++){
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
    for(x=5;x<8;x++) {
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverSAT(){
    for(x=0;x<5;x++){
        document.querySelectorAll(".orbita")[x].classList.add("invisivel");
    }
    for(x=6;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function saturnoCard(){
    for(x=0;x<9;x++){
        document.querySelectorAll(".cardPlaneta")[x].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[x].classList.add("invisivel");
    }
    
    document.querySelectorAll(".cardPlaneta")[6].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[6].classList.add("visivel");
}

function saturnofecharCard(){
    document.querySelectorAll(".cardPlaneta")[6].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[6].classList.add("invisivel");
}

//Urano

document.querySelectorAll(".navul li")[7].addEventListener("mouseover",()=>handleHoverURA())
document.querySelectorAll(".navul li")[7].addEventListener("mouseout",()=>mouseForaURA())

function mouseForaURA(){
    for(x=0;x<6;x++){
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
    for(x=6;x<8;x++) {
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverURA(){
    for(x=0;x<6;x++){
        document.querySelectorAll(".orbita")[x].classList.add("invisivel");
    }
    for(x=7;x<8;x++){
    document.querySelectorAll(".orbita")[x].classList.add("invisivel");
}
}

function uranoCard(){
    for(x=0;x<9;x++){
        document.querySelectorAll(".cardPlaneta")[x].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[x].classList.add("invisivel");
    }
    
    document.querySelectorAll(".cardPlaneta")[7].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[7].classList.add("visivel");
}

function uranofecharCard(){
    document.querySelectorAll(".cardPlaneta")[7].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[7].classList.add("invisivel");
}

//Netuno

document.querySelectorAll(".navul li")[8].addEventListener("mouseover",()=>handleHoverNET())
document.querySelectorAll(".navul li")[8].addEventListener("mouseout",()=>mouseForaNET())

function mouseForaNET(){
    for(x=0;x<7;x++){
        document.querySelectorAll(".orbita")[x].classList.remove("invisivel");
    }
}

function handleHoverNET(){
    for(x=0;x<7;x++){
        document.querySelectorAll(".orbita")[x].classList.add("invisivel");
    }
}

function netunoCard(){

    for(x=0;x<8;x++){
        document.querySelectorAll(".cardPlaneta")[x].classList.remove("visivel");
        document.querySelectorAll(".cardPlaneta")[x].classList.add("invisivel");
    }
    
    document.querySelectorAll(".cardPlaneta")[8].classList.remove("invisivel");
    document.querySelectorAll(".cardPlaneta")[8].classList.add("visivel");
}

function netunofecharCard(){
    document.querySelectorAll(".cardPlaneta")[8].classList.remove("visivel");
    document.querySelectorAll(".cardPlaneta")[8].classList.add("invisivel");
}