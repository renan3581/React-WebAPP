import React from "react";


class sorveteForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                sabor: '',
                casquinha: true,
                guardanapo: 'sim',
            
        }
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Método para capturar as alterações no input.
    handleInputChange(event){ //Event se refere a qualquer evento disparado no DOM.
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value; //Verifica se o evento é do tipo checkbox.
        const name = target.name; //Pega o nome do item que esta sendo modificado.
     
        this.setState({
            [name]: value
        });
    }

    //Método para capturar os valores do input.
    handleSubmit(event){
        const {sabor, casquinha, guardanapo} = this.state; //Desconstrução do objeto e altera o estado.
        alert(`Sabor: ${sabor} Casquinha: ${casquinha} Guardanapo: ${guardanapo}`);
        event.preventDefault(); //Previne o redirecionamento do formulário.
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} style = {{display:'flex',flexDirection:"column"}}>
                <label>
                    Escolha o sabor:
                    <select name="sabor" value={this.state.sabor} onChange={this.handleChange}>
                        <option value="">Selecione</option>
                        <option value="morango">Morango</option>
                        <option value="limao">Limão</option>
                        <option value="abacaxi">Abacaxi</option>
                    </select>
                </label>
                <label>
                    Casquinha:
                    <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleChange} />
                </label>
                <label>
                    Guardanapo:
                    <select name="guardanapo" id="guardanapo" value={this.state.guardanapo} onChange={this.handleChange}>
                        <option value="" checked = {this.state.guardanapo === ''}>Selecione</option>
                        <option value="sim" checked = {this.state.guardanapo === 'sim'}>Sim</option>
                        <option value="nao" checked = {this.state.guardanapo === 'não'}>Não</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default sorveteForm;