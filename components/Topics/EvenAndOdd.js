import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
    handleClick() {
        let arr = this.state.userInput.split(','); //
        let evens = [];
        let odds = [];
    for(let i = 0; i < arr.length; i++){
        let currentNum = Number(arr[i])
        if(currentNum % 2 ===0){
            evens.push(currentNum)
        } else {
            odds.push(currentNum)
        }
    }
   this.setState({evenArray: evens, oddArray: odds})
}
    // handleClick(){
    //     let arr = this.state.userInput.split(','); //
    //     let evens = [];
    //     let odds = [];

    //     for (let i = 0; i < arr.length; i++) {
            
    //         if(arr[i] % 2 === 0){
    //             evens.push(parseInt(arr[i], 10))
    //         } else {
    //             odds.push(parseInt(arr[i], 10))
    //         }
    //     }
    //     this.setState({evenArray: evens, oddArray: odds})                  
    // }

    // handleChange(val) {
    //     this.setState({userInput: val})
    //    }

    handleChange(e) {
        this.setState({userInput: e.target.value})
    } 

    render() {
        return(
       <div className="puzzleBox evenAndOddPB">
           <h4>Evens and Odds</h4>
               {/* <input className="inputLine" onChange={this.handleChange(e.target.value)}></input> */}
               <input className="inputLine" onChange={this.handleChange.bind(this)}></input>
               <button className="confirmationButton" onClick={this.handleClick.bind(this)}>See Results!</button>
               {/* <button className="confirmationButton" onClick={()=> this.assignEvenAndOdds(this.state.userInput)}>See Results!</button> */}
               <span className="resultsBox">Evens:{this.state.evenArray.join(',')}</span> 
               <span className="resultsBox">Odds: {this.state.oddArray.join(',')}</span>
       </div>
        )
    }
}

export default EvenAndOdd;



