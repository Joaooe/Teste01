import React from 'react';
import './ListaLivros.css';

const ListaLivros = () => {
  const frutas = ['Harry Potter', '1988', 'Don Quixote'];

  return (
    <ul className="lista-livros">
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};

export default ListaLivros;
