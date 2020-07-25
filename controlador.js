//Consumo del servicio de spotyfy para
//traer canciones de un artista


//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");

//DEFINIR LA VARIABLE `PARA RECIBIR LOS AUDIOS
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");


//1. Definir la URL del servicio
let url = "https://api.spotify.com/v1/artists/0h1zs4CTlU9D2QtgPxptUD/top-tracks?country=US";

//2. Definir el token o permiso de acceso
let token = "Bearer BQBbMuBL1qpumgtJrr_EvxMJseDF1cHZ7cfRZ_0Gm96WUPlELCXUb_UbLKvPZdzBZQzOAQY1Huz0MWNpoxYBDW4feqmty3yfLLMgN2AMuPSmWEuaxGyZYIV8m0yV3nteKz-dqIBGybw9YfwL-HN5V4IbSf217h3H2Qg"
    //3.Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. crear encabezado de conexion
objetoAJAX.setRequestHeader('Authorization', token);

//6. cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[1].album.images[1].url);
    console.log(respuesta.tracks[2].album.images[2].url);
    imagen1.src=respuesta.tracks[0].album.images[0].url;
    imagen2.src=respuesta.tracks[1].album.images[1].url;
    imagen3.src=respuesta.tracks[2].album.images[2].url;

    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[1].preview_url);
    console.log(respuesta.tracks[2].preview_url);
    audio1.src=respuesta.tracks[0].preview_url;
    audio1.src=respuesta.tracks[1].preview_url;
    audio1.src=respuesta.tracks[2].preview_url;
    

}

//7. enviamos la peticion
objetoAJAX.send();