import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { getGamebyName } from "../../redux/actions";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const dispatch= useDispatch()
  const handleSearch = () => {
   dispatch(getGamebyName(searchTerm))
    
  };

  return (
    <div className={styles.mainContainer}>
      <Link to="/Home">Home</Link>
      <Link to="/Create">Create</Link>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Busqueda por nombre"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <Link to="/">Landing Page</Link>
    </div>
  );
};

export default NavBar;
