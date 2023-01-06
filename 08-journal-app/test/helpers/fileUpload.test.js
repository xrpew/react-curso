import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary' 


cloudinary.config({
    cloud_name:'dtp4wmkue',
    api_key:'935192162988421',
    api_secret:'u-pbKNY1HP05TZSIHIQPwjI96vU',
    secure: true
});




describe(' pruebas en fileUlpoad', () => {

  test('debe subir el archivo a cloudinary', async()=>{

    const imageUrl = 'https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
    
    const resp = await fetch(imageUrl)
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg')

    const url = await fileUpload( file );

    expect(typeof url).toBe('string')

    // console.log(url)

    const segments = url.split('/');
    const imageId = segments[segments.length - 1 ].replace('.jpg','')
    const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId ], {
        resource_type:'image'

    });
    // console.log({ cloudResp })
  }),

  test('debe de retornar null', async()=>{

    const file = new File ([],'foto.jpg')
    const url = await fileUpload(file)
    expect( url ).toBe( null )

  })


})
