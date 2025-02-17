function add_input(){
    let input = document.getElementById("tarea");
    let otra = input.value.trim();

    if(otra === ""){
        alert("Agregar datos");
        return;
    }

    let lista = document.createElement("li");
    lista.textContent = otra;

    let boton = document.createElement("button");
    boton.textContent = "Eliminar";

    boton.addEventListener("click", function(){
        lista.remove();
    });

    lista.appendChild(boton);
    document.getElementById("lista").appendChild(lista);

    input.value = "";
}

