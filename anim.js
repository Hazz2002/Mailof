// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Recuerdo aquel día", time: 16 },
  { text: "Como si fuera hoy", time: 16.5 },
  { text: "No hay nada como ella", time: 21 },
  { text: "Y siquiera me encontró", time: 24 },

  { text: "Recuerdo todavía", time: 33 },
  { text: "La vez que la besé", time: 35 },
  { text: "Fue mi primer amor", time: 40 },
  { text: "Y ahora escribo su canción", time: 42 },

  { text: "Hay algo más", time: 51 },
  { text: "Inexplicable como su mirada", time: 53 },
  { text: "Inigualable como la manera en que me cela", time: 58 },
  { text: "Y trata de disimular que no está mal", time: 65 },

  { text: "Voy a cuidarte por las noches", time: 70 },
  { text: "Voy a amarte sin reproches", time: 74 },
  { text: "Te voy a extrañar en la tempestad", time: 78 },
  { text: "Y aunque existan mil razones para renunciar", time: 82 },

  { text: "No hay nadie más", time: 85 },
  { text: "No hay nadie más", time: 92 },

  { text: "Se llevó todo, se llevó tristeza", time: 96 },
  { text: "Ya no existe espacio en la melancolía", time: 98 },
  { text: "Porque, a su lado, todo tiene más razón", time: 104},

  { text: "Me llevé sus lágrimas, llegaron risas", time: 107 },
  { text: "Cuando estamos juntos, la Tierra se paraliza", time: 108 },
  { text: "Se paraliza", time: 114 },

  { text: "Hay algo más", time: 116 },
  { text: "Inexplicable como su mirada", time: 118},
  { text: "Inigualable como la manera en que me cela", time: 123},
  { text: "Y trata de disimular que no está mal", time: 129 },

  { text: "Voy a cuidarte por las noches", time: 133},
  { text: "Voy a amarte sin reproches", time: 138},
  { text: "Te voy a extrañar en la tempestad", time: 143},
  { text: "Y aunque existan mil razones para renunciar", time: 146 },

  { text: "Voy a cuidarte por las noches", time: 151 },
  { text: "Voy a amarte sin reproches", time: 156 },
  { text: "Te voy a extrañar en la soledad", time: 161 },
  { text: "Y aunque existan mil razones para terminar", time: 164 },

  { text: "No hay nadie más", time: 168 },
  { text: "No hay nadie más", time: 173 },
  { text: "No quiero a nadie más", time: 177 },
  { text: "Ooh, no hay nadie más", time: 181 },

  { text: "No hay nadie", time: 187 },
  { text: "Te amo mailof 💜", time: 187 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 199000);