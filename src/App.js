import React from 'react';
import Footer from './footer';
import Header from './header';
import Content from './content';
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * This is the main funcion that will handle the Routing for the Kids Who Code Website.
 * To learn more about the project, and to get involved contact rh388@njit.edu
 * 
 */

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
