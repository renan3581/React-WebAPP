import React, { useState } from "react";

const TodoListFunctional = () => {
    
    const [items, setItems] = useState(['Item 1','Item 2','Item 3'])
    const addItem = (item) => {
        setItems([...items, item])
    }



    const removeItem = () => {
        setItems([...items.slice(1)])
    }

    return (
        <div className="bloco-lista">
            <p>Minha lista className</p>  
            <ul className="lista-estilizada"> 
                {items.map((item => <li key={item}>{item}</li>))}
            </ul>  
            <button onClick={() => addItem('Item 4')}>Adicionar Item</button> 
            <button onClick={() => removeItem()}>Remover Item</button>
        </div>
    );
};

export default TodoListFunctional;