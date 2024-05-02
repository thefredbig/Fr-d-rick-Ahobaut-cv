let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("maintenance");
        habilidades[5].classList.add("outils");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

 // Récupérer les valeurs des champs et composer le message
 document.getElementById("envoyerMessage").addEventListener("click", function() {
    var prenom = document.getElementById("prenom").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var objet = document.getElementById("objet").value;
    var message = document.getElementById("message").value;

    // Composer le message WhatsApp
    var messageWhatsApp = "Bonjour, je m'appelle " + prenom + ". Mon numéro de téléphone est " + telephone + ". Mon email est " + email + ". Mon objet est " + objet + ". Voici mon message : " + message;

    // Encoder le message pour l'URL
    var messageEncode = encodeURIComponent(messageWhatsApp);

    // Composer le lien WhatsApp avec le message
    var lienWhatsApp = "https://wa.me/33610694708/?text=" + messageEncode;

    // Rediriger vers WhatsApp
    window.location.href = lienWhatsApp;
});