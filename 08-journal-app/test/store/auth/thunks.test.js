import { logingWithEmailPassword, logoutFirebase, singInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth';
import { checkingAuthentications, startGoogleSingIn, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth/thunks'
import { clearNotesLogout } from '../../../src/store/journal/journalSlice';
import { demoUser } from '../../fixtures/authFixtures';


jest.mock('../../../src/firebase/providers')

describe(' Pruebas en el AuthThunks', () => {
    
    const dispatch = jest.fn()
    beforeEach(()=>jest.clearAllMocks());


  test('should invocar el checkingCredentians', async() => {

    await checkingAuthentications()( dispatch )
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() )
   
});

    test('startGoogleSingIn debe de llamar checkingCredentials y login', async() => {
        
        const loginData = { ok:true, ...demoUser }
        await singInWithGoogle.mockResolvedValue( loginData );
        
        //thunk
        await startGoogleSingIn()( dispatch );
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login( loginData ))

    
    })
    test('startGoogleSingIn debe de llamar checkingCredentials y logout  - Error', async() => {
        
        const loginData = { ok:false, errorMessage: 'Un error en Google'}

        await singInWithGoogle.mockResolvedValue( loginData );
        //thunk
        await startGoogleSingIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(logout(loginData.errorMessage))
    });

    test('startLoginWithEmailPassword debe de llamar checkingCredentianls y login -Exito', async() => {
      
        const loginData = {ok:true, ...demoUser}
        const formData = { email: demoUser.email, password:'123456' };

        await logingWithEmailPassword.mockResolvedValue( loginData )

        await startLoginWithEmailPassword(formData)(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    });

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async() => {
        await startLogout()(dispatch)
        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );
    });
    
  
})
