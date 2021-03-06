# Tutorial

## Utilizando CSS no React

<br/>

### Inline:
  
 	Pros:
        - Maneira prática e direta.
        - Ajustes rápidos.
        - Testes de estilo.
        
      Contras:
        - Dificil manutenção.
        


```js
const divStyle = {
    color: 'blue'
    backgroundImage:'url('+imgURL+')'
};

function HelloWorldComponent(){
    return <div style={divStyle}>Hello World!</div>;
}

function app(){
    return (
        <HelloWorldComponent style={{marginTop: '10px'}}/>
    )
}

```


<br/>

### Classes:
	
   	Pros:
       - Maneira prática e direta.
        
   	Contras:
        - Dificil manutenção.
        - Pouca flexibilidade.
        - Conflitos com nomes.

```css
.div-style  {
    color: 'blue';
    background: url('https://www.algo.com');
};
```

```js

import './HelloWorldComponent.css'
function HelloWorldComponent(){
    return <div className="div-style">Hello World!</div>;
}

```


<br/>

### Css in Js:
	"npm i --save styled-components"

		- Facil manutenção
		- Estilos dinamicos
		- Injeção automatica de prefixos vendor
		

```js

const divStyle = styled.div`
    color: blue;
    background:url(`${props => props.imageURL}`)
`

function HelloWorldComponent(){
    const url = 'https://algo.com'
    return <divStyle imageURL={url}>Hello World!</divStyle>;
}

```


## Stateful VS Stateless component.

<br/>

### Ciclo de vida react:

- Inicialization -> mounting -> Updating -> unmounting


<br/>

### Stateful:

- Possui gerenciamento de estado nos componentes.
- Construido usando classes ou Hooks.
- Caso deseje utilizar classes, deve-se importar a biblioteca componenents do react.
    - import React, { Component } from "react";


<br/>

### Stateless :

- Não possui gerenciamento de estado nos componentes.
- Construido usando funções.


<br/>

## Flux:

- É uma arquitetura criada para comunicação entre componentes.
- Flux é um padrão de trafego de dados unidirecional.