import { useDispatch, useSelector } from "react-redux";
import { changeShowM } from "../store/slices/menu";

export const MenuLateral = () => {
  // const { showMenu } = useSelector((state)=>state.menu)
  const dispatch = useDispatch();
  return (
    <div className="menuLateral">
      <ul>
        <li>
          <button onClick={() => dispatch(changeShowM())}>
            <a href="#">- Principal -</a>
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(changeShowM())}>
            <a href="#about">- Sobre -</a>
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(changeShowM())}>
            <a href="#proyectos">- Proyectos -</a>
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(changeShowM())}>
            <a href="#tecnologia">- Tecnologías -</a>
          </button>
        </li>
        <li>
          <button onClick={() => dispatch(changeShowM())}>
            <a href="#footer">- Contacto -</a>
          </button>
        </li>
      </ul>
    </div>
  );
};
