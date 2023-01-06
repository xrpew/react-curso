import React, { useRef } from "react";
import miAudio from "../assets/soundUniverse.mp3"; // Importa el archivo de audio

export const MusicaEspacial = () => {
  // Crea una referencia al elemento <audio>
  const audioRef = useRef();

  // Esta función se ejecuta cuando se hace clic en el botón
  function togglePlay() {
    // Obtiene la referencia al elemento <audio>
    const audio = audioRef.current;
    // Si el audio está en pausa, lo reproduce
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

 
  return (
    <div className="btn-audio">
      {/* Crea un elemento <audio> con la propiedad autoplay */}
      <audio ref={audioRef} src={miAudio} autoPlay={false}></audio>
      {/* Crea un botón que llame a la función togglePlay() al hacer clic */}
      <button
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
        onClick={togglePlay}
      >
        <div>
          -🎶-
          <p style={{ fontSize: "9px", animation: "zigzag .5s infinite" }}>
            musica espacial
          </p>
        </div>
      </button>
    </div>
  );
};
