//El que farem a continuació serà escollir els elements del HTML i assignar-lis noms.
const inputElement = document.getElementById("textElement"); 
const addButton = document.getElementById("afegirElement"); 
const list = document.getElementById("llistaElements"); 
// A continuació el que farem serà fer que el botó funcioni i fagi la seva funció
addButton.addEventListener("click", () => {
    const text = inputElement.value.trim(); 
    //Això el que fa és que si està buit no es realitzara cap acció
    if (text === "") return; 
    afegirElement(text); 
    inputElement.value = ""; 
});
// A continuació crearem una funció que afegeixi elements a la llista <li>
function afegirElement(text) {
//Això serveix per crear la llista <li>
    const li = document.createElement("li"); 
//El que fa això és que quan li donguem a editar es crearà un nou text.
    const span = document.createElement("span"); 
    span.textContent = text;
    span.classList.add("editable");
//Amb això crearem el botó d'editar
    const editButton = document.createElement("button"); 
    editButton.textContent = "Editar";
//Crearem també el botó d'eliminar
    const deleteButton = document.createElement("button"); 
    deleteButton.textContent = "Eliminar";
    // Afegim els elements dins del <li>
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    list.appendChild(li);

    // Ara farem que els botons funcionin, el d'editar, eliminar i afegir element. I també quan fem clic al text aquest modifiqui el seu color
    editButton.addEventListener("click", () => editarElement(span)); 
    deleteButton.addEventListener("click", () => li.remove()); 
    span.addEventListener("click", () => canviarColor(span)); 
}
//Ara crearem la funció per a poder editar el text
function editarElement(span) {
    const nouText = prompt("Edita el text:", span.textContent); 
    if (nouText !== null && nouText.trim() !== "") {
        span.textContent = nouText; 
    }
}
//Aquesta funció té a veure amb els colors quan cliquem el text
function canviarColor(span) {
    const colors = ["red", "blue", "green", "orange", "purple"]; 
    const colorAleatori = colors[Math.floor(Math.random() * colors.length)]; 
    span.style.color = colorAleatori; 
}
