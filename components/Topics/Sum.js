import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        this.state = {
            number1: 0,
            number2:0,
            sum:null
        }
    }
    handleChange(){

    }
    handleClick(){
        
    }
    render() {
        return(
        <div className = "puzzleBux sumPB">
        <h4>Sum</h4>
        <input className = "inputLine" onChange={e=>}></input>
        <input className = "inputLine"></input>
        <button className = "confirmationButton"></button>
        <span className = "resultsBox"></span>
        </div>
        )
    }
}

export default Sum