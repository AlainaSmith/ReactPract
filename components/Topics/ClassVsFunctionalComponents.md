--Class Components--

import { Component } from ‘react’;

class YourComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

--Functional Component--
One specificity of functional components is that you’re using hooks to manage things from state, to lifecycle, to references, and more.

function YourComponent(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}

--OR--

const YourComponent = (props) =>; {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
}