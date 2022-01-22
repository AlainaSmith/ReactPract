import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['Alaina', 'Smith'],
            userInput: "",
            filteredArray:""
        }
    }


    handleChange(e) {
        this.setState({userInput: e.target.value})
    }
    handleClick() {
        let filtered = [];
        for(let i = 0; i < this.state.unFilteredArray; i++){
            for(let key in this.state.unFilteredArray[i]){
                if(key === this.state.userInput){
                    filtered.push(this.state.unFilteredArray[i])
                } break
            }
        }
        this.setState({filteredArray: filtered})
    }

    render() {
        return(
        <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzletext">{JSON.stringify(this.state.unFilteredArray)}</span>
            <input className="inputLine" onChange={this.handleChange.bind(this)}></input>
            <button className="confirmationButton" onClick={this.handleClick.bind(this)}>See Results!</button>
            <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }
}

export default FilterString
