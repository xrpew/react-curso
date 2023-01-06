import reactLogo from '../assets/react.png'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css-3.png'
import javascriptLogo from '../assets/js.png'


import { Cards } from "../components/Cards";

export const Tecnologia = () => {
  return (
    <div id="tecnologia" className="pages">
      ...
      <h2>Tecnologías</h2>
      <br />
      <p>
        Para hacer una excelente página web, es necesario saber cuáles son las herramientas que ofrecen un mejor rendimiento
      </p>
      <br />
      <div className="contentdiv">
        <Cards
          title={"React.js"}
          subtitle={"Como herramienta de desarrollo"}
          image={reactLogo}
        />
        <Cards
          title={"HTML"}
          subtitle={"Lenguaje principal de los sitios webs"}
          image={htmlLogo}
        />
        <Cards
          title={"CSS"}
          subtitle={"Para que se vean geniales"}
          image={cssLogo}
        />
        <Cards
          title={"JavaScript"}
          subtitle={"Para que haya interacción interesante"}
          image={javascriptLogo}
        />
        {/* <Cards title={'Blender'} subtitle={'Para agregar elementos sorprendentes e impresionantes'} image={'src/assets/react.png'}/> */}
      </div>
    </div>
  );
};
