import { useContext } from "react";
import contextCell from "../useContext/contextCell";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import toggleLogoutComp from "./toggleComp/ToggleLogoutComp";
import toggleLoginComp from "./toggleComp/ToggleLoginComp";
import ToggleLogoutComp from "./toggleComp/ToggleLogoutComp";
import ToggleLoginComp from "./toggleComp/ToggleLoginComp";
const Navbar = () => {
  const contextCellValue = useContext(contextCell);
  const { toggleLogin } = contextCellValue;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {toggleLogin ? <ToggleLogoutComp /> : <ToggleLoginComp />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
