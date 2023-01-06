import { useContext } from "react";
import { UserContext } from "./context/UserContext";
export const LoginPage = () => {



  const { user, setUser } = useContext( UserContext  );
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

    <pre aria-label="pre">
      {JSON.stringify( user, null, 3 )}
    </pre>

    <button className="btn btn-primary mt-3"
            onClick = { () => setUser({id: 123, name:'ramon', email:'samon@mail.com'})}>

    Añadir Usuario
    </button>

    </>
  );
};
