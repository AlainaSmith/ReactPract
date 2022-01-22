--this--    
"this" references the object that is executing the current function. If that function is part of an object, we call that function a method, if that function is a method in an object, "this" refernces THAT object itself.

EXAMPLE:
const video = {
    play() {
        console.log(this)
    }
}

play() in this case is a method inside of the video object. 
"this" is referencing the video object.

--LINE 25: setState()--
setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

--LINE 37: (e)--
e is the event, which in this case is change, target is the element that triggered the event, which in this case is the input, and value is the value of the input element.
Basically it retrieves value of whatever input it was called on.
In this case, it’s your input element so whatever you insert in your input can be accessed through event.target.value

--LINE 43: onChange={}--
The onChange event in React detects when the value of an input element changes.
It is an event Handler. The above code displays a single input field which, when typed in, passes its current value to the handleChange function.
Let’s expand on the previous example by declaring a new function inside of our React component for the onChange handler to pass a value to. We’ll call it handleChange, and have it log the input’s current value to the console.
We can access the target input’s value inside of the handleChange by accessing e.target.value. Therefore, to log the name of the input field, we can log e.target.name.

--LINE 44: bind() method--
The bind() method returns a new function, when invoked, has its "this" sets to a specific value.
Bind is finding hte most current state.

--JSX--
React uses JSX, this needs to be converted to JavaScript because
the browser cannot comprehend JSX.
Just confirming my understanding, we install create-react-app to compile our JSX to be readable for our web browser.
npx create-react-app install-compiler
npm install react-scripts@latest

Its more efficient to write in JSX, have a built in tool that compiles in than to just write our code in JavaScript?

--ReactDOM.render--
This is a function that will display the React component in the browser. 
EXAMPLE:

function Hello() {
    return <div>Hello React!</div>   //This is JSX 
}

ReactDOM.render(
    <Hello />,
    document.getElementsById('mountNode')
)

//ReactDOM.render is taking in 2 arguments here. The 1st one is the component we will be rendering, which in this case is the Hello component (the function from above).
"The second argument is the DOM element in the browser, where we wish the React component to show up"
QUESTION: What does he mean by "Where we wish the React component to show up?"

