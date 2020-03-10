import React from 'react';
import axios from 'axios'

import MyUserCard from './components/MyUserCard'

import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      myUser: {},
      follower: []
    }
  }
  componentDidMount (){
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
      <h1>GitHub Username Project in React</h1>
      <MyUserCard myUserCard={this.state.myUser}/>

    </div>
  );
}
}

export default App;
