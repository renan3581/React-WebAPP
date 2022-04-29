import React from "react";

class FileInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();//Cria uma referencia para o input file.
    };

    handleSubmit(event){
        event.preventDefault();
        alert(`Arquivo enviado: ${this.fileInput.current.files[0].name}`);
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:"column"}}>
                <label>
                    Selecione o arquivo:
                    <input type="file" ref={this.fileInput} />
                </label>
                <br/>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}