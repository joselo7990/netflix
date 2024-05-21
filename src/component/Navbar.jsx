import { useState } from "react";
import logo from "/n.jpg";
import usuario from "/usuario.webp";
import { Link } from "react-router-dom";

function Navbar(params) {
  const [search, setSearch] = useState("");
  return (
    <div className="nav bg-primary flex items-center justify-between mb-0">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-18 w-18 object-cover mr-2"
          style={{ maxWidth: "8rem", maxHeight: "8rem" }}
        />
        <Link to={"/"}>
          <h1 className="text-2xl text-zinc-50">Inicio</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="p-3 flex items-center">
          <div className="w-20 h-20 relative rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={usuario}
              alt="Imagen de perfil"
            />
          </div>
        </div>{" "}
        \
      </div>
    </div>
  );
}

export default Navbar;
