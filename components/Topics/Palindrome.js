import React, { Component } from 'react';

class Palindrome extends Component {
    constructor () {
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    handleChange(e) {

    }

    handleClick(){

    }
    render() {
        return(
            <div className = "puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className ="inputLine"></input>
            <button className = "confirmationButton"></button>
            <span className = "resultsBox"></span>
            </div>
        )
    }
}

export default Palindrome
