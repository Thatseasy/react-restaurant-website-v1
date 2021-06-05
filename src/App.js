import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Menu from './components/Menu';
import About from './components/About';
import Trap from './components/Gallery/App'


function App() {


  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Switch>



        <Route exact path='/'>
          <Products heading='Choose your favorite' data={productData} />
          <Feature />
          <Products heading='Fish for fun' data={productDataTwo} />
          <Contact />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/menu'>
          <Menu />
          <Contact />
        </Route>

        <Route path='/about'>
          <About />
          <Contact />
        </Route>

        <Route path='/gallery'>
          <Trap style={{ background: '#150f0f' }} />
          <Contact />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );


}

export default App;
