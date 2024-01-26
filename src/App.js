import './App.css';
// import Testcompoenent1 from './components/functional_component/test_component';
// import Reitreatorclasscomp from './components/class_components/classcomponent';
// import classlearn from './components/class_components/classcomponent';
// import Login from './components/class_components/loginComponent';
import Navbaar from './components/functional_component/Navbar';
import Aboutme from './components/functional_component/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './components/functional_component/Skills';
import Project from './components/functional_component/Project';
import Home from './components/functional_component/Home';
import Login from './components/functional_component/Contact';
import Footer from './components/functional_component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbaar></Navbaar>
      <Routes>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<Aboutme/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Contact' element={<Login></Login>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
      </header> */}
      <div className="footer-design">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
