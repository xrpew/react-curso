import { useState, useEffect } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "strider",
        email: "sergio@google.com",
    });

    const { username, email } = formState;

    const onInputChance = ({ target }) => {
        const { name, value } = target;
    // console.log(name, value)

        setFormState({
        ...formState,
        [name]: value,
        });
  };

    useEffect(()=>{
        // console.log('cualquier cambio de estado')
    }) //<--- esto pasa porque no le enviamos parametros

    useEffect(() => {
    // console.log("useEffect called!");
  },[]); //<-----cuando le pasamos un arreglo de dependencias vacío, esto hace que se ejecute una sola vez en la renderización 
    
    useEffect(()=>{
        // console.log('formSate changed!')

    },[formState])   

    useEffect(()=>{
        // console.log('email changed')
    },[ email ])



  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChance}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@mail.com"
        name="email"
        value={email}
        onChange={onInputChance}
      />

      {
        (username==='strider2')&& <Message/>
      }

    </>
  );
};
