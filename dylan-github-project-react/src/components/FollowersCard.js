import React from 'react';
import axios from 'axios';
import Followers from './followers';
import './Follower.css';



class FollowersCard extends React.Component{
    constructor (){
        super();
        this.state = {
            followers: []
        }
    }
    componentDidMount(){
        axios.get('https://api.github.com/users/dylan17th/followers')
        .then(res => this.setState({
            followers: res.data
        }))
        .catch(err => console.log(err))

    }
    render(){
        return (
            <div className='follower-cards-container'>
                {this.state.followers.map( user => (
                    <Followers user={user} key={user.id}/>
                ))}
            </div>
        )
    }
}

export default FollowersCard 