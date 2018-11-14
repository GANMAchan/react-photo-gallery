import React, { Component } from 'react';
import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js';
import Gallery from './components/Gallery/Gallery.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.route === "gallery" ?
          <Gallery /> :
          <Home onRouteChange={this.onRouteChange}/>
        }
        <Footer />
      </div>
    );
  }

  constructor(props){
    super(props);
    this.state = {route:"home"};
  }

  onRouteChange = (route)  =>{
    this.setState({route:route});
  }
}

export default App;
