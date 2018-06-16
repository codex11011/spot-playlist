import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Glyphicon} from 'react-bootstrap'

let defaultStyle = {
  color:'#ffffff',
};

let fakeServerData = {
  user:{
    name:'Arya',
    playlists:[
      {
        id:1,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/BTS%2C_Wings.jpg/220px-BTS%2C_Wings.jpg',
        name:'My favourite',
        songs:[
          { name: 'Fake love', duration: 52 },
          {name:'Bood sweat tears',duration:21},
          {name:'If you',duration:32}
        ] 
      },
      {
        id:2,
        img:'https://pre00.deviantart.net/5708/th/pre/f/2017/060/3/f/bts___spring_day_by_tsukinofleur-db0uoy9.png',
        name: 'Discover Weekly',
        songs: [
          {name:'I need you',duration:27},
          {name:'Fire',duration:21}, 
          {name:'Let go',duration:30}
        ]
      },
      {
        id:3,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdw6p4l48KRDAoQKqR7XSITuM8e4LLUuw9oiNVRYkMo6Q30Urg',
        name: 'Weekly Hits',
        songs: [
          {name:'Danger',duration:25}, 
          {name:'Run',duration:42}, 
          {name:'Dope',duration:39}
        ]
      },
      {
        id:4,
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lX32zCkftxzm9TuhOKA_aAECPHO7lUvN4g21pkfnp4tkXFIOGg',
        name: 'Billboard Top',
        songs: [
          {name:'DNA',duration:24}, 
          {name:'No More Dream',duration:29}, 
          {name:'Singularity',duration:27}
        ]
      },
      {
        id: 5,
        img:'https://i.pinimg.com/originals/74/9c/a6/749ca6bbb5a0f7001641bd4c2621e9ec.jpg',
        name: 'Billboard Top',
        songs: [
          { name: 'DNA', duration: 24 },
          { name: 'No More Dream', duration: 29 },
          { name: 'Singularity', duration: 27 }
        ]
      }, {
        id: 6,
        img:'https://koreaboo-cdn.storage.googleapis.com/2017/09/2pmjunhokbs.jpg',
        name: 'Rock',
        songs: [
          { name: 'Danger', duration: 25 },
          { name: 'Run', duration: 42 },
          { name: 'Dope', duration: 39 }
        ]
      }, {
        id: 7,
        img:'https://i.ytimg.com/vi/GhuuMNpBb8c/maxresdefault.jpg',
        name: 'BTS',
        songs: [
          { name: 'I need you', duration: 27 },
          { name: 'Fire', duration: 21 },
          { name: 'Let go', duration: 30 }
        ]
      },
      {
        id: 8,
        img:'https://images-na.ssl-images-amazon.com/images/I/81MbkwC1ueL._SL1500_.jpg',
        name: 'Dynamo',
        songs: [
          { name: 'Fake love', duration: 52 },
          { name: 'Bood sweat tears', duration: 21 },
          { name: 'If you', duration: 32 }
        ]
      }

    ]
  },
  
}

class PlaylistCounter extends Component {
  render() {    
    return (
      <div style={{...defaultStyle,width:'40%',display:'inline-block'}}>
        <h2><span style={{ border: '2px solid white', padding: '10px' }}>{this.props.playlists.length} playlists</span></h2>
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
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2><span style={{ border: '2px solid white',padding:'10px'}}>{totalDuration} Hours</span></h2>
      </div>
    );
  }
}


class Filter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, margin: '30px'}}>
      <span style={{border: '2px solid white',borderRadius: '9px',padding:'9px'}}>
      <Glyphicon style={{margin:'5px'}} glyph="search"/>
      <input style={{color: 'black'}} type="text" onChange={event => 
        this.props.onTextChange(event.target.value)}/>
      </span>
     </div>
    );
  }
}

class Playlist extends Component {
  render() {

    let playlist = this.props.playlist;
   
    return (
      <div className="hoverDiv" style={{ ...defaultStyle, width: '20%', display: 'inline-block', border: '2px solid white', margin: '10px'}}>
        <span style={{ display: 'block' }}><img style={{height:'350px',width:'250px',margin:'0px'}} src={playlist.img} alt='list'/></span>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song=>
            <li style={{display: 'none'}} key={song.duration}>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      serverData : {},
      filterString:''
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    },1000);

    // setTimeout(() => {
    //   this.setState({ filterString: 'weekly'});
    // }, 2000);
  }

  render() {

    let renderPlaylist = this.state.serverData.user ? this.state.serverData.user.playlists
    .filter(playlist =>
      playlist.name.toLowerCase().includes(
        this.state.filterString.toLowerCase())
    ):[];

    return (
      <div className="App">
        { this.state.serverData.user ?
          <div>
            <h1 style={{...defaultStyle,fokntSize:'54px',padding:'10px'}}>
              { this.state.serverData.user.name}'s Playlist
            </h1>
              <PlaylistCounter playlists={renderPlaylist}/>
              <HoursCounter playlists={renderPlaylist}/>    
              <Filter onTextChange={text => { 
                this.setState({filterString:text})}}/>
              {renderPlaylist.map(playlist =>
                  <Playlist key={playlist.id} playlist={playlist}/>
               )}              
          </div> : <h1 style={defaultStyle}>"Loading..."</h1>
        }
      </div>
    );
  }
}

export default App;
