import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('pruebas en el authReducer', () => { 
    test('should retornar el estado por defecto', () => {
      
        const state = authReducer({logged: false}, {})
        expect( state ).toEqual({logged: false}, {})

    });
    test('should (login) llamar al login autenticar y establecer usuario', () => {
      
        const action= { 
            type: types.login,
            payload: {
                name:'jaun',
                id:'123'
            }
        }
        const state = authReducer({logged:false}, action)
        expect( state ).toEqual({
            logged:true,
            user: action.payload
        })

    });
    test('should (logout) borrar el name de usuario y logged en false', () => {
      
        const state = {
            logged:true,
            user:{id:'234', name:'juan'}
        }
        const action = {
            type:types.logout
        }
        const newState = authReducer(state, action)

        expect( newState ).toEqual({logged:false})

    })
 })