import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/home"><button>Livros</button></Link>
      <Link to="/register"><button>Cadastrar novo Livro</button></Link>
    </nav>
  )
}

export default Navigation