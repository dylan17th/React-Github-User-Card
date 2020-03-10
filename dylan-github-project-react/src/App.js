import React from 'react';
import axios from 'axios'

import MyUserCard from './components/MyUserCard';
import FollowersCard from './components/FollowersCard';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      myUser: {}
  }
}

  componentDidMount() {
    axios.get('https://api.github.com/users/dylan17th')
      .then(res => this.setState({
        myUser: res.data
      })
      )
      .catch(err => console.log(err.message))
  }

  render(){
  return (
    <div className="App">
      <h1 className="title">GitHub Username React</h1>
      <MyUserCard myUserCard={this.state.myUser}/>
      <h2 className="title">Followers</h2>
      <FollowersCard />
    </div>
  );
}
}

export default App;
