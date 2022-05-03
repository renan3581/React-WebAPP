import React from "react";

const TodoListStateless = ({ items}) => (
    <div className="bloco-lista">
        <p>Minha lista className</p>
        <ul className="lista-estilizada">
            {items.map(item => <li key={item}>{item}</li>)}
        </ul> 
    </div>
);

export default TodoListStateless;