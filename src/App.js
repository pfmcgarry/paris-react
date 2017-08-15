import React, { Component } from 'react';

import Home from './components/Pages/Home/Home';
import Services from './components/Pages/Services/Services'
import Book from './components/Pages/Book/Book'
import News from './components/Pages/News/News'
import Contact from './components/Pages/Contact/Contact'
import Admin from './components/Admin/Admin'
import Team from './components/Pages/Team/Team'
import Salon from './components/Pages/Salon/Salon'


import { BrowserRouter, Match } from 'react-router'


import './index.css';

class App extends Component {
  render() {
    return (

        <div className="wrapper">


            <BrowserRouter>
              <div>
                <Match exactly pattern="/" component={Home} />
                <Match exactly pattern="/services" component={Services} />
                <Match exactly pattern="/team" component={Team} />
                <Match exactly pattern="/salon" component={Salon} />
                <Match exactly pattern="/news" component={News} />
                <Match exactly pattern="/book" component={Book} />
                <Match exactly pattern="/contact" component={Contact} />
                <Match exactly pattern="/admin" component={Admin} />
              </div>
            </BrowserRouter>
          </div>
        

    )
  }
}

export default App;
