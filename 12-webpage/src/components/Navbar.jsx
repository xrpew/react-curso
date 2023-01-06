import { useDispatch, useSelector } from "react-redux";
import { MusicaEspacial, PictureOfTheDay } from "../components";
import { changeShow } from "../store/slices/counter/";
import { changeShowM } from "../store/slices/menu/";
import { MenuLateral } from "./MenuLateral";

export const Navbar = () => {
  const { showPicture } = useSelector((state) => state.counter);
  const { showMenu } = useSelector((state)=>state.menu)
  const dispatch = useDispatch();



  return (
    <>
        <div className="nav-bar">
          <ul id="computerScreenNav">
            {<MusicaEspacial />}
            <a className="linkeable" href="#">
              {" "}
              <li>- Principal -</li>{" "}
            </a>
            <a className="linkeable" href="#about">
              {" "}
              <li>- Sobre -</li>{" "}
            </a>
            <a className="linkeable" href="#proyectos">
              {" "}
              <li>- Proyectos -</li>{" "}
            </a>
            <a className="linkeable" href="#tecnologia">
              {" "}
              <li>- Tecnologías -</li>{" "}
            </a>
            <a className="linkeable" href="#footer">
              {" "}
              <li>- Contacto -</li>{" "}
            </a>
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
              }}
              onClick={() =>  dispatch(changeShow())}
              >
              
              <div>
                -📷-
                <p style={{ fontSize: "9px", animation: "zigzag .5s infinite" }}>
                  foto del día
                </p>
                <p style={{ fontSize: "7px" }}>(NASA)</p>
              </div>
            </button>{" "}
          </ul>

          <ul id="cellScreenNav">
            {<MusicaEspacial />}
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
              }}
              onClick={() => dispatch(changeShow())}
            >
              <div>
                -📷-
                <p style={{ fontSize: "9px", animation: "zigzag .5s infinite" }}>
                  foto del día
                </p>
                <p style={{ fontSize: "7px" }}>(NASA)</p>
              </div>
            </button>{" "}
            <button
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
              }}
              onClick={() => dispatch(changeShowM())}
            >
              <div>
                -📜-
                <p style={{ fontSize: "9px", animation: "zigzag .5s infinite" }}>
                  Menú
                </p>
              </div>
            </button>{" "}
          </ul>
        </div>
      
      {showMenu ? <MenuLateral/> : null}
      {showPicture ? <PictureOfTheDay /> : null}
    </>
  );
};
