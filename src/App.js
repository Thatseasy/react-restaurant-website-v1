import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Contact from './components/Contact'
import Footer from './components/Footer';



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
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
