function modificar() {
    let p = document.getElementById("parrafo");
    p.textContent = "nuevo parrafo";
}

function fondo() {
    document.body.style.backgroundColor = "lightblue";
}

function desaparecer() {
    document.getElementById("parrafo").style.display = "none";
}

function aparecer() {
    document.getElementById("parrafo").style.display = "block";
}

function nuevop() {
    let nuevop = document.createElement("p");
    nuevop.textContent = "Parrafo añadido";
    document.body.appendChild(nuevop);
}

function imagen() {
    let imagen = document.getElementById("imagen");
    imagen.setAttribute("src", "../IMAGENES/conductor2.jpg");
}