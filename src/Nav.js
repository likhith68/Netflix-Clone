import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
        className="nav__logo"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
