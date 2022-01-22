import React, { Component } from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObjects from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';

class TopicBrowser extends Component {
    render() {
    return <div>
        <EvenAndOdd />
        <FilterObjects />
        <FilterString />
    </div>
    }
}


export default TopicBrowser

//we need to import all of our components and render a div with all of those comonents inside of it.
