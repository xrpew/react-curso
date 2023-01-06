import cohete from '../assets/eei.svg'

export const AboutPage = () => {
  return (
    <div id="about" className="pages">
      
      <div className="titlediv">
        <div className="letters">
          <h2>Sobre mi</h2>
          <br />
          <p>
            Mi principal motivación es cada día superarme, con nuevos retos,
            nuevas ideas que me permitan crecer más como profesional no estoy
            acostumbrado a decir "no lo sé hacer" soy más de "investigaré para
            saber cómo se hace" y así he ido poco a poco evolucionando tanto mis
            sitios web (portafolios) como mis proyectos personales. <br />{" "}
            <br />
            Me encanta la música, la programación y por si no lo notaron, los
            viajes espaciales. Así que si saben de una vacante en la NASA... me
            avisan (no me avisen, reviso a diario por si deciden querer renovar
            su{" "}
            <a id="nasaLink" href="https://www.nasa.gov/" target="_blank">
              página
            </a>
            )
          </p>
        </div>
        <div className="imagess">
          <img id='cohete'src={cohete} alt="cohete" />
        </div>
      </div>
    </div>
  );
};
