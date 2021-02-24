import React from "react"
import Home from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from './pages/Form';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () =>{
    return(
        <div className="App">
      <Router>
        <Navbar />
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/contact-us'>
          <Contact />
        </Route>
        <Route path='/sign-up'>
          <Form />
        </Route>
      </Switch>
    </Router>
    
     </div>
    )
}
export default App