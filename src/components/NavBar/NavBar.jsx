import React from 'react'
import st from './NavBar.module.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav className={st.navbar}>
            <div className={st.logo}>
                <h1>Logo</h1>
            </div>
            <div className={st.links}>
                <a href=""><Link to="/">Home</Link></a>
                <a href=""><Link to="/cadastro">Cadastro</Link></a>
                <a href=""><Link to="/listagem">Listagem</Link></a>    
            </div>
        </nav>
    </div>
  )
}

export default NavBar