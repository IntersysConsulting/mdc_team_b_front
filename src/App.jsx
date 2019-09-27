import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const App = ({ store }) => {
    //possible roles: "registeredUser", "guest", "admin", "external"
    const [accessLevelState] = useState({
      role: "external",
      name: "John Smith"
    });

    //Once you finish your views, you should import them inside layout container, and replace component={DemoSomething}
    //with component={YourImport} under the corresponding route
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
