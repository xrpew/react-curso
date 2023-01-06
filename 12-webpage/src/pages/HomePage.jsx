import me from '../assets/yo.png'


export const HomePage = () => {
  return (
    <div id='home' className='pages'>
        <div className='bacl'>
            <h2>Hola! soy Sergio Pérez</h2>
            <h4>Desarrollador Web</h4>
        </div>
        <img src={me} alt="myPicture" />
    </div>
  )
}
