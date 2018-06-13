import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


let defaultStyle = {
  color:'#ffffff',
};

class Aggreate extends Component {
  render() {
    return (
      <div style={{...defaultStyle,width:'40%',display:'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
     <div style={defaultStyle}>
      <img alt='img'/>
      <input type="text"/>
     </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle,width:'25%',display:'inline-block'}}>
        <img alt='list'/>
        <h3>Playlist Name</h3>
        <ul>
          <li>song1</li>
          <li>song2</li>
          <li>song3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggreate/>
        <Aggreate />
        <Filter/>
        <Playlist/>
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
