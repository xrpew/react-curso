export const fileUpload = async ( file) =>{
    // if( !file ) throw new Error('No tenemos ningún archivo a subor')
        if( !file ) return null;


    const cloudURL = 'https://api.cloudinary.com/v1_1/dtp4wmkue/upload'
    
    const formData = new FormData();

    formData.append('upload_preset','react-journal');
    formData.append('file',file)


    try {
        const resp = await fetch(cloudURL, {
            method:'POST',
            body: formData
        });

        // console.log(resp)
        if(!resp.ok) throw new Error(' No se pudo subir imagen')
        const cloudResp = await resp.json();

        // console.log(cloudResp)
        return cloudResp.secure_url


    } catch (error) {
        // console.log(error)
        // throw new Error(error.message)
        return null;
    }



}