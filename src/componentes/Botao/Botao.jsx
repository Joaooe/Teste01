import React from 'react';
import './Botao.css';

const Botao = () => {
  const handleClick = () => {
    
  };

  return (

    <a href="https://www.youtube.com/results?search_query=livros">
      <button className="botao" onClick={handleClick}>
      Clique aqui
    </button>
    </a>

    
  );
};

export default Botao;
