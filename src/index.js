// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//const buttonText = "1234567";
const buttonText = {text: "Click Me"};
function getButtonText(){
    return "Click on me!";
}

const labelText = 'Enter name:';

// Create React components
//const App = function() {
const App = () => {
    // this is JSX code
    return (<div>
        <label className="label" htmlFor="name">
            {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{"backgroundColor": "blue", "color": "white"}}>
            {buttonText.text}
        </button>
    </div>);
};



// Take the React component and show it on the screen
ReactDOM.render(<App />,document.getElementById("root"));

