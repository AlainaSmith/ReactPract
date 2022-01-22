import React, { Component } from 'react'

class FilterObjects extends Component {
        constructor(){
        super() 
            this.state = {
                unFilteredArray: [
                    {
                        name: 'alaina',
                        number: 1
                    },
                    {
                        name: 'Corey',
                        number: 2
                    },
                    {
                        number: 3
                    }
                        
                ],
                userInput: "",
                filteredArray: []
            }
        }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    handleClick() {
        let filtered= [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            for(let key in this.state.unFilteredArray[i]){
                if(key === this.state.userInput){
                    filtered.push(this.state.unFilteredArray[i])
                    break
                }
            }
        }
        this.setState({filteredArray: filtered})
    }
        
render() {
    return (
    <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
            <span className="puzzletext">{JSON.stringify(this.state.unFilteredArray)}</span>
            <input className="inputLine" onChange={this.handleChange.bind(this)}></input>
            <button className="confirmationButton" onClick={this.handleClick.bind(this)}>See results!</button>
            <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray)}</span>
    </div>
    )
}
}


export default FilterObjects

//Stringify - only have to use it if we have an objct tha we are returning. When we are filtering we are getting
//an entire object back.
