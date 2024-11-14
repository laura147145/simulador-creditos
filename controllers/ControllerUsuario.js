import { usuarios } from "../models/ModelUsuario.js";

export function login() {
    console.log(usuarios);
    let loginUsuario = document.getElementById();
    let loginContrasena = document.getElementById();
usuarios.some(function(){});
    
}

export function register() {
    let registroNombre = document.getElementById("register-nombre").value;
    let registroUsuario = document.getElementById("register-usuario").value;
    let registroCorreo = document.getElementById("register-correo").value;
    let registroCo ntraseña = document.getElementById("register-contrasena").value;
    let registroConfirmar = document.getElementById("register-confirmar").value;
    let newRegistro = {
        nombre: registroNombre,
        usuario: registroUsuario,
        correo:  registroCorreo,
        contrasena: registroContraseña,
        confirmar: registroConfirmar
    };
    console.log(usuarios);
    usuarios.unshift(newRegistro);

    usuarios.push(newRegistro);
    document.getElementById("from-register").style.display = "none";
    document.getElementById("form-login").style.display = "flex"

    
    
}
