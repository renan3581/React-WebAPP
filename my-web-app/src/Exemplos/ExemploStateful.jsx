import React, { Component } from "react";

class TodoListStatefull extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            items: [
            'Item 1',
            'Item 2',
            'Item 3'
            ]
        };
    }



    addItem = (item) => {
        /*
        [...this.state.items, item] é o mesmo que:
        const itemsUpdated = this.state.items;
        itemsUpdated.push(item);
        this.setState({ items: itemsUpdated });

        */
        this.setState({ items: [...this.state.items, item] });
    }

    removeItem = () => {
        /*
        const itemsUpdated = this.state.items;
        itemsUpdated.pop();
        this.setState({ items: itemsUpdated });
        */
        this.setState({ items: this.state.items.slice(1) });
    }

    render()  {
        const { items } = this.state;
        return (
            <div className="bloco-lista">
                <p>Minha lista className</p>  
                <ul className="lista-estilizada"> 
                    {items.map((item => <li key={item}>{item}</li>))}
                </ul>  
                <button onClick={() => this.addItem(this, 'Item 4')}>Adicionar Item</button> 
                <button onClick={() => this.removeItem()}>Remover Item</button>
            </div>
        );
    }
}
export default TodoListStatefull;