import React, {useState} from "react";

//HTML padrão.
const Form = () => {

    
    return(
        <div>
            <form>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Telefone"/>
                <input type="submit" value="Enviar" />
            </form>

        </div>
    )
}




export default Form