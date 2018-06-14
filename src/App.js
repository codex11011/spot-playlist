import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


let defaultStyle = {
  color:'#ffffff',
};

let fakeServerData = {
  user:{
    name:'Arya',
    playlists:[
      {
        name:'My favourite',
        songs:[
          {name:'Fake love',duration:52},
          {name:'Bood sweat tears',duration:21},
          {name:'If you',duration:32}
        ] 
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name:'I need you',duration:27},
          {nane:'Fire',duration:21}, 
          {name:'Let go',duration:30}
        ]
      },
      {
        name: 'Weekly Hits',
        songs: [
          {name:'Danger',duration:25}, 
          {name:'Run',duration:42}, 
          {name:'Dope',duration:39}
        ]
      },
      {
        name: 'Billboard Top',
        songs: [
          {name:'DNA',duration:24}, 
          {name:'No More Dream',duration:29}, 
          {name:'Singularity',duration:27}
        ]
      }
    ]
  },
  
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle,width:'40%',display:'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}


class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs,eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs);
    },[])
    let totalDuration  = allSongs.reduce((sum,eachSong)=>{
      return sum + eachSong.duration;
    },0);
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>{totalDuration} Hours</h2>
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

  constructor(){
    super();
    this.state = {serverData : {}};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    },1000);
  }

  render() {
    return (
      <div className="App">
        { this.state.serverData.user ?
          <div>
            <h1 style={{...defaultStyle,'font-size':'54px'}}>
              { this.state.serverData.user.name}'s Playlist
            </h1>
              <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
              <HoursCounter playlists={this.state.serverData.user.playlists}/>    
              <Filter/>
              <Playlist/>
              <Playlist/>
              <Playlist/>
              <Playlist/>
          </div> : <h1 style={defaultStyle}>"Loading..."</h1>
        }
      </div>
    );
  }
}

export default App;
