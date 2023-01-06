import PropTypes from 'prop-types';


// const newMessage = {
//   message: "hello",
//   title: "sergio",
// };

const heloo = (a, b) => a + b;

// para declarar funciones que se usarán en el componente, hay que declararlas fuera de la función
export const FirstApp = ( {title, subtitle, name} ) => {


  return (
    <>
      <h1 data-testid='test-title'>{ title }</h1>
      {/* <p>{heloo('hola: ', 'bien y tu')}</p> */}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{ subtitle }</p>
      <p>{ subtitle }</p>

      <p>{ name }</p>
    </>
  );
}; 


FirstApp.propTypes={

  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  subTitle:8,
  name: 'sergio Perez',
  // title:'no hay título'
}