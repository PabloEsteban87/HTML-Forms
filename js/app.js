function datos(){
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let edad = document.getElementById('age').value;
    let site;
    let language;
    if (document.getElementById('yes').checked){
        site = document.getElementById('yes').value;
    } else if(document.getElementById('no').checked){
        site = document.getElementById('no').value;
    } else {
        site = document.getElementById('maybe').value;
    }

    let opciones = document.getElementById("opciones").value;

    if (document.getElementById('HTML').checked){
      language = document.getElementById('HTML').value;
    } else if(document.getElementById('CSS').checked){
        language = document.getElementById('CSS').value;
    } else {
        language = document.getElementById('js').value;
    }

let mensaje = document.getElementById("message").value;

    console.log(nombre);
    console.log(email);
    console.log(edad);
    console.log(opciones);
    console.log(site);
    console.log(language);
    console.log(mensaje);
}