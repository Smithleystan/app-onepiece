import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="">Accueil</Link>
            </li>
            <li>
              <a href="article.html">Nos article</a>
            </li>
            <li>
              <Link to="Plan">Nous trouver</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li class="logoposition">One piece</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
