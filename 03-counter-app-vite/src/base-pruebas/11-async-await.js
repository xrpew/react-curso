
export const getImagen = async() => {

    try {

        const apiKey = 'AaNPlcuM71Je0Pe0PWGMe9dpdfOlRI1B';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        console.log(data)
        const { url } = data.images.original;

       return url

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen'
    }
    
    
    
}

 getImagen();



