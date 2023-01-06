import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "../store/slices/counter/";

const obtenerDatosDeApi = async () => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=i2W75eg7ZUMs07KKB62Zc7PfN54ycBSlyEDoow4A');
    const datos = await response.json();
    return datos;
}



export const PictureOfTheDay = () => {
    const [claseAdd, setClaseAdd] = useState('')
    
    const handleChangeShow =()=>{
        setClaseAdd('wayoo')
        setTimeout(()=>{
            dispatch(changeShow())
            
        },1000)
        
      
      }
    
    const dispatch = useDispatch();
    const [datos, setDatos] = useState(null);
 
  
    useEffect(() => {
      // Obtenemos los datos de la API en el efecto de montaje
      obtenerDatosDeApi().then(datos => setDatos(datos));
    }, []);
  
    // console.log(datos)
    if (datos==null) {
        // Si aún no se han obtenido los datos, mostramos un mensaje de cargando
        return <p style={{backgroundColor:"black", width:"100%", color:"white", position:"fixed", zIndex:90}} >Cargando...</p>;
    }
    // Si ya se obtuvieron los datos, mostramos el componente
    
    
    return (
        <>
        <div className={`pictureOfDay ${claseAdd}`}>
            <button onClick={()=>handleChangeShow()}>X</button>
            <a href={datos.hdurl} target={"_blank"}>
                <p style={{textAlign:"start"}}>PICTURE OF THE DAY (NASA) </p>
                        <img src={datos.hdurl} alt={datos.url} />
                        <p>{datos.title}</p>
            </a>
        </div>
            
        </>
    );
};
