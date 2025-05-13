import React from 'react';
import './App.css';

// Importa todos os componentes
import Titulo from './componentes/Titulo/Titulo';
import Paragrafo from './componentes/Paragrafo/Paragrafo';
import Imagem from './componentes/Imagem/Imagem';
 import ListaLivros from './componentes/ListaLivros/ListaLivros';
import Botao from './componentes/Botao/Botao';

function App() {
  const nomeUsuario = 'Usuario';

  return (
    <div className="App">
      <Titulo nome={nomeUsuario} />
      <Paragrafo />
      <Imagem />
      <ListaLivros />
      <Botao /> 
    </div>
  );
}

export default App;
