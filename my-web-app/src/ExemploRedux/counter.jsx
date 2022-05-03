import React,{Component} from "react";
import {connect} from "react-redux";

//Cria um nova classe que envia as actions para o reducer.
class Counter extends Component{
    state = {count: 0};
    increment = () => {
        this.props.dispatch({type: "INCREMENT"});
    }

    decrement = () => {
        this.props.dispatch({type: "DECREMENT"});
    }


    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h2>Counter</h2>
                <span>{this.props.count}</span>
                <div>
                <button onClick={this.increment}>Increment</button>
                
                <button onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        )
    }

} 

//Define o estado que deve ser monitorado.

function mapStateToProps(state) {
    return {
        count: state.count
    };
    
}

export default connect(mapStateToProps)(Counter);