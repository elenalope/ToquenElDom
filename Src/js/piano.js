/* Aquí empiezan los estilos JS del teclado */
//aquí empiezan los estilos de js del piano
document.addEventListener('DOMContentLoaded', function () {
  let teclasBlancas = document.querySelectorAll('.tecla_blanca');

   teclasBlancas.forEach(function (tecla) {
       tecla.addEventListener('click', function () {
           // Cambia la imagen al hacer clic
           tecla.src = "/Public/teclas/tecla_blanca_pulsada.svg";
       });
   });
});


document.addEventListener('DOMContentLoaded', function () {
   let teclasBlancas = document.querySelectorAll('.tecla_blanca');

    teclasBlancas.forEach(function (tecla) {
        tecla.addEventListener('mouseout', function () {
            // Cambia la imagen al hacer clic
            tecla.src = "/Public/teclas/tecla_blanca.svg";
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  let teclasNegras = document.querySelectorAll('.tecla_negra');

   teclasNegras.forEach(function (tecla) {
       tecla.addEventListener('click', function () {
           // Cambia la imagen al hacer clic
           tecla.src = "/Public/teclas/tecla_negra_pulsada.svg";
       });
   });
});


document.addEventListener('DOMContentLoaded', function () {
   let teclasNegras = document.querySelectorAll('.tecla_negra');

    teclasNegras.forEach(function (tecla) {
        tecla.addEventListener('mouseout', function () {
            // Cambia la imagen al hacer clic
            tecla.src = "/Public/teclas/tecla_negra.svg";
        });
    });
});
//-----SONIDO-------//

// 3. Función de reproducción de audio
function reproducirAudio(id) {
// Pausar el audio después de 500 milisegundos (0.5 segundos)
setTimeout(function() {
 audio.pause();
 // Reiniciar el audio para la próxima reproducción
 audio.currentTime = 0;
}, 500);
let audio = document.getElementById(id);
audio.play();
}
// 4. Código JavaScript
const tecla_blancado = document.getElementById("dotecla_blanca")
tecla_blancado.addEventListener("click",function(){
  return reproducirAudio("audiodo")
});
//RE
const tecla_blancare = document.getElementById("retecla_blanca")
tecla_blancare.addEventListener("click",function(){
  return reproducirAudio("audiore")
});
const tecla_blancami = document.getElementById("mitecla_blanca")
tecla_blancami.addEventListener("click",function(){
  return reproducirAudio("audiomi")
});
const tecla_blancafa = document.getElementById("fatecla_blanca")
tecla_blancafa.addEventListener("click",function(){
  return reproducirAudio("audiofa")
});
const tecla_blancasol = document.getElementById("soltecla_blanca")
tecla_blancasol.addEventListener("click",function(){
  return reproducirAudio("audiosol")
});
const tecla_blancala = document.getElementById("latecla_blanca")
tecla_blancala.addEventListener("click",function(){
  return reproducirAudio("audiola")
});
const tecla_blancasi = document.getElementById("sitecla_blanca")
tecla_blancasi.addEventListener("click",function(){
  return reproducirAudio("audiosi")
});
//teclas negras
const dosostecla_negra = document.getElementById("dosostecla_negra")
dosostecla_negra.addEventListener("click",function(){
  return reproducirAudio("audiodosos")
});
const resostecla_negra = document.getElementById("resostecla_negra")
resostecla_negra.addEventListener("click",function(){
  return reproducirAudio("audioresos")
});
const fasostecla_negra = document.getElementById("fasostecla_negra")
fasostecla_negra.addEventListener("click",function(){
  return reproducirAudio("audiofasos")
});
const solsostecla_negra = document.getElementById("solsostecla_negra")
solsostecla_negra.addEventListener("click",function(){
  return reproducirAudio("audiosolsos")
});
const lasostecla_negra = document.getElementById("lasostecla_negra")
lasostecla_negra.addEventListener("click",function(){
  return reproducirAudio("audiolasos")
});

//TOCAR EL PIANO CON EL TECLADO
document.addEventListener('DOMContentLoaded', function () {
let teclasBlancas = document.querySelectorAll('.tecla_blanca');

teclasBlancas.forEach(function (tecla) {
    tecla.addEventListener('click', function () {
        manejarClick(tecla);
    });
});
});

document.addEventListener('DOMContentLoaded', function () {
let teclasNegras = document.querySelectorAll('.tecla_negra');

teclasNegras.forEach(function (tecla) {
    tecla.addEventListener('click', function () {
        manejarClick(tecla);
    });
});
});

document.addEventListener('DOMContentLoaded', function () {
document.addEventListener('keydown', function (e) {
    manejarTecla(e);
});
});

function manejarClick(tecla) {
const idSonido = obtenerIdSonido(tecla);
reproducirAudio(idSonido);
cambiarImagen(tecla);
}

function manejarTecla(e) {
const idSonido = obtenerIdSonidoPorTecla(e.code);
if (idSonido) {
    reproducirAudio(idSonido);
    const tecla = document.getElementById(`${idSonido.replace("audio", "")}tecla_blanca`);
    cambiarImagen(tecla);
}
}

function obtenerIdSonido(tecla) {
return tecla.id.replace("tecla_blanca", "audio");
}

function obtenerIdSonidoPorTecla(codigoTecla) {
const mapeoTeclas = {
    KeyA: "audiodo",
    KeyS: "audiore",
    KeyD: "audiomi",
    KeyF: "audiofa",
    KeyG: "audiosol",
    KeyH: "audiola",
    KeyJ: "audiosi",
    // Puedes agregar más teclas según sea necesario
};

return mapeoTeclas[codigoTecla];
}

function cambiarImagen(tecla) {
if (tecla) {
    tecla.src = `/Public/teclas/tecla_blanca_pulsada.svg`;

    setTimeout(function () {
        tecla.src = `/Public/teclas/tecla_blanca.svg`;
    }, 500);
}
}

function obtenerIdSonido(tecla) {
  return tecla.id.replace("tecla_negra", "audio");
  }
  
  function obtenerIdSonidoPorTecla(codigoTecla) {
  const mapeoTeclas = {
      KeyW: "audiodosos",
      KeyE: "audioresos",
      KeyR: "audiofasos",
      KeyT: "audiosolsos",
      KeyY: "audiolasos",
      // Puedes agregar más teclas según sea necesario
  };
  
  return mapeoTeclas[codigoTecla];
  }
  
  function cambiarImagen(tecla) {
  if (teclanegra) {
      teclanegra.src = `/Public/teclas/tecla_negra_pulsada.svg`;
  
      setTimeout(function () {
          tecla.src = `/Public/teclas/tecla_negra.svg`;
      }, 500);
  }
  }
// Resto del código de reproducción de audio y asignación de eventos de clic

