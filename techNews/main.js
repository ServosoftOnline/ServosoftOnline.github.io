//ESTE ARCHIVO HARÁ QUE CUANDO PULSEMOS EN EL BOTON TRES RALLAS LA BARRA NAVEGACION VERTICAL APAREZCA/DESAPAREZCA

//Para asegurarme que index.html ve a main.js mostraré un mensaje que despues comentaré cuando funcione
//console.log("Javascript accesible");

//Seleccionamos el elemento cuya clase sea menu-btn. Lo estaremos oyendo cuando haga click
document.querySelector(".menu-btn").addEventListener("click", () => {
  /*
    Para asegurarme que el click es detectado mostraré en mensaje un mensaje que despues comentaré
    console.log('click');
    Busca el elemento .nav-menu de index.html. Si tiene show lo quita y si no lo tiene lo pone 
    Si no esta show se aplica la regla css .nav-main ul.nav-menu que contiene transform:translateX(-400px) y oculta la barra
    si esta show aplica se aplica la regla css .nav-main ul.nav-menu.show que contiene transform:translateX(-20px) y la muestra
    */
  document.querySelector(".nav-menu").classList.toggle("show");
});

//Aparece al inicio el showcase
ScrollReveal().reveal('.showcase');
// El resto aparece con un retardo (delay) de medio segundo
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });