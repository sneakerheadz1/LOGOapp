// import Search from '../components/search/Search'
import { Switch, Route } from 'react-router-dom';
import { useState} from 'react';
import '../App.css';
// import axios from 'axios';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

// pages
import Home from './Home'
import About from './About'
import Form from './Form'


function App() {

  const [schoolData, setSchoolData] = useState([])
  return (

    <div id="app">
      
      <NavBar setSchoolData={setSchoolData} />
          <Switch>
            <Route exact path='/form'>
              <Form />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/'>
              <Home schoolData={schoolData} />
            </Route>
          </Switch>
        <Footer />
    
    </div >
  );
}

export default App;
