import { useState } from "react";
import { useCounter } from "../Hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(11);
  const [show, setShow] = useState( true )

  return (
    <>
      <h1>
        Counter: <Small value={ counter } />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="bnt btn-outline-primary" onClick={()=> setShow( !show )}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
