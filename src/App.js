import React from 'react';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataIsLoaded: false,
        };
    }

    render() {
        const handleClick = () => {
            fetch("http://localhost:8080/hello?myName=Aashutosh")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json,
                        DataIsLoaded: true,
                    });
                });
        };

        return (
            <div className = "App">
                <div className = "Button">
                    <button onClick={handleClick}>Click Me!</button>
                    <p>
                        {JSON.stringify(this.state.items)}
                    </p>
                </div>
            </div>
        );
    }
}

export default App;