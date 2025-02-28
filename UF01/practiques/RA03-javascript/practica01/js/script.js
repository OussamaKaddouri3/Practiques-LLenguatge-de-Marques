//Seleccionem l'element <h1> amb id=titol
document.querySelector('#titol');
//Seleccionem l'element <p> amb class="paragraf"
document.querySelector('.paragraf');
//Canviem el text del h1 per un altre
document.querySelector('#titol').textContent = "Practica 1 - Oussama";
//Modifiquem contingut del <p> i fem que tingui una negreta
document.querySelector('.paragraf').innerHTML = "<b>Hola, Bon dia</b>";
//Canviar el color del text del <h1>
document.querySelector('h1').style.color ='red';
//Modificar la mida de la lletra del <h1>
document.querySelector('h1').style.fontSize ='40px';
//Per afegir un esdeveniment, primer seleccionarem el botó
const boto = document.getElementById("canviarText");
//També seleccionarem el títol
const titol = document.getElementById("titol");
//Afegim els esdeveniments
boto.addEventListener("click",function (){
//Això modifica el text 
titol.textContent = "Text Modificat";
//Això modifica el color del text
titol.style.color = "blue";
});
//Modificar el botó id="afegirElement" perquè afegeixi un nou element <li>
//Començarem seleccionant l'element
const botoAfegir = document.getElementById("afegirElement");
//Ara ja podem començar amb la creació del event
botoAfegir.addEventListener("click",function(){
//això serveix per crear un <li>
const nouElement = document.createElement("li");
//això serveix per assignar el text
nouElement.textContent = "Nou element afegit!";
//ara seleccionarem l'element llista
const llista = document.getElementById("llista");
//Ara ja podem seleccionar el text d'abans i fer que entri dins de la llista
llista.appendChild(nouElement);
});
//Ara el que farem serà seleccionar el botó amb id="eliminarElement"
const botoEliminar = document.getElementById("eliminarElement");
//Ja podem començar a crear l'event
botoEliminar.addEventListener("click",function(){
//això serveix per comprovar que hi ha elements dins de la llista
    if (llista.lastElementChild) {
//això serveix per eliminar si hi ha, l'últim element creat
        llista.removeChild(llista.lastElementChild);
    }
});
