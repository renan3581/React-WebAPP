import React, { useState } from 'react';

//O hook useState é uma forma de manter o estado de um componente mesmo que a pagina seja atualizada.
//O estado é mantido até que o componente seja removido do DOM.
//Estrutura = const [Valor a ser alterado, setAlgo - metodo usado para alterar o estado] = useState(0) Valor inicial do estado.


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); //Define o valor inicial do estado
  const [name, setName] = useState('Name');

  return (
    <div>
      <p>Hello {name}!</p>
      <p>You clicked {count} times!</p>
      <button onClick={() => {setCount(count + 1); setName('Outro nome')}}> {/*Altera o valor do estado*/}
        Click me
      </button>
    
    </div>
  );
}

export  default Example;