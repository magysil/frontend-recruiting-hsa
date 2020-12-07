import React from "react";

const Navbar = () => {
  return (
    <div>
      <p>Git Hub</p>
      <input
        type="text"
        className="inputsearch"
        placeholder="Buscar usuario"
      ></input>
      <button>Buscar</button>
    </div>
  );
};

export default Navbar;
