document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault();

    const usercorrecto = 'admin';
    const passcorrecto = '1234';

    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let mensaje = document.getElementById('mensaje');

    if (usuario === usercorrecto && contraseña === passcorrecto) {
        mensaje.style.color = 'green';
        mensaje.innerHTML = 'Acceso correcto';
        setTimeout(() => { window.location.href = 'index.html'; }, 1000);
        
    } else {
        mensaje.style.color = 'red';
        mensaje.innerHTML = 'Usuario o contraseña incorrectos';
    }

});