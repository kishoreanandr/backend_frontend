import logo from './logo.svg';
import './App.css';
import Testcompoenent1 from './components/functional_component/test_component';
// import Reitreatorclasscomp from './components/class_components/classcomponent';
import classlearn from './components/class_components/classcomponent';
import Login from './components/class_components/loginComponent';
function App() {
  return (
    <div className="App">
      {/* <Reitreatorclasscomp></Reitreatorclasscomp> */}
      <classlearn></classlearn>
      <Login></Login>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Testcompoenent1></Testcompoenent1>
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

export default App;
