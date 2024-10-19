import React from 'react';

const Greeting = ({ name }) => {
    return (
        <div className="greeting">
            <h1>Welcome, {name}!</h1>
            <p>We're glad to have you here! Enjoy your time and feel free to explore.</p>
        </div>
    );
};

// Usage example
const App = () => {
    return (
        <div>
            <Greeting name="Felix" />
        </div>
    );
};

export default App;
