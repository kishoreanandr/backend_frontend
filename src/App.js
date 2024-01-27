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
import Contact from './components/functional_component/Contact';
import Footer from './components/functional_component/Footer';
import Login from './components/functional_component/Login';

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
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        
      </Routes>
      </BrowserRouter>
      <div className="footer-design">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
