import React from 'react';
import './Follower.css'


const FollowersCard = ({user}) => {
    console.log(user)
    return(
        <div className='container-FollowersUser'>
            <div className='info-under-photo2 title-3'>UserName: {user.login}</div>
            <img className='photo2'src={`${user.avatar_url}`} alt='id'/>  
            <button className='followers-profile-button'><a className="anchor" href={`${user.html_url}`}> View GitHub profile</a></button>          
        </div>
    )
}

export default FollowersCard;