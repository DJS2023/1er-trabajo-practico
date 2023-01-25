let menuVisible = false;

function seleccionar(){
    //oculto el menu 
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("html"); 
        habilidades[3].classList.add("Photoshop");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
       
    }
}


//detecto el scrolling 
window.onscroll = function(){
    efectoHabilidades();
}