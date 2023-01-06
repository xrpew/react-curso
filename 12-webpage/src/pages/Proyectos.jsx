import portafolio from '../assets/portfolio.png'
import pacman from '../assets/Pacman.png'
import sudoku from '../assets/Sudoku.png'
import bancoCl from '../assets/BancoCl.png'
import gifExpert from '../assets/GifExpert.png'
import { CardProyect } from "../components";

export const Proyectos = () => {
  return (
    <div id="proyectos" className="pages">
      ...
      <h2>Proyectos</h2>
      <br />
      <a href="https://portfoliosperez.netlify.app/" target="_blank">
        <CardProyect title={"Portafolio"} image={portafolio} />
      </a>
      <p>
        A lo largo del tiempo de aprendizaje he realizado una cantidad
        significante de portafolios, usando distintas tecnologías que me sirven
        para todos los días practicar e ir mejorando las técnicas de desarrollo,
        el cual fue elaborado con HTML y CSS es la versión anterior de mi
        portafolio, distinto al que estás navegando
      </p>
      <hr />
      <a href="https://pacman-js-only.netlify.app/" target="_blank">
        <CardProyect title={"Pacman"} image={pacman} />
      </a>
      <p>
        El mismo pacman de toda la vida, sí, pero esta vez hecho con mis propias
        manos, en el siguiente proyecto, verás JavaScript en su máxima
        expresión, ya que todos los movimientos, puntaje, vidas, y reinicio son
        validados a travez de funciones de JavaScript
      </p>
      <hr />
      <a href="https://deft-pasca-ae2b2c.netlify.app/" target={"_blank"}>
        <CardProyect title={"Sudoku"} image={sudoku} />
      </a>
      <p>
        Sudoku, creado con JavaScript, esta vez consumiendo un API que genera
        tableros de forma aleatoria para jugada.
      </p>
      <hr />
      <a href="https://stirring-sunflower-7e4b6f.netlify.app/" target="_blank">
        <CardProyect title={"Banco Cl"} image={bancoCl} />
      </a>
      <p>
        Esta es una réplica de la página del Banco de Chile, se adapta tanto
        versión escritorio como versión móvil, desarrollada en React, estilizada
        con mucho CSS y un poco de BOOSTRAP
      </p>
      <hr />
      <a href="https://6331a8ec9b81bd15e4833fe8--gif-xrpew.netlify.app/" target="_blank">
        <CardProyect title={"GifExpert"} image={gifExpert} />
      </a>
      <p>
        Aplicación web que te permite buscar Gifs consumiento la API
        directamente de GIPHY desarrollado en React, como parte de un proyecto
        realizado en curso.
      </p>
      <hr />
    </div>
  );
};
