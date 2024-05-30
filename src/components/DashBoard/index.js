import React from "react";
import './styles.css'; 
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

function DashBoard() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome className="btHome"/>
            </Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="PaginaLogin">
              <RiLogoutBoxRLine /> 
            </Link>
          </li>
        </ul>
      </nav>
      <button>
        <Link to="/Ia">Link</Link>
      </button>
    </div>
  );
}

export default DashBoard;