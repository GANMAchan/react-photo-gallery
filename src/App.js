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
        {/*ヘッダーを配置*/}
        <Header />
        {/*routeの値がgalleryならGalleryを表示
          それ以外ならhomeを表示*/}
        {this.state.route === "gallery" ?
          <Gallery /> :
          //HomeのpropsにonRouteChange関数を渡す*
          <Home onRouteChange={this.onRouteChange}/>
        }
        {/*フッターを配置*/}
        <Footer />
      </div>
    );
  }

  //現在のページの状態(=state)を持たせる
  constructor(props){
    super(props);
    this.state = {route:"home"};
  }

  //state routeを更新
  onRouteChange = (route)  =>{
    this.setState({route:route});
  }
}

export default App;
