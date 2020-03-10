import React from 'react';
import './MyUserCard.css'


const MyUserCard = ({myUserCard}) => {
    console.log(myUserCard)
    return(
        <div className='container-myUser'>
            <h3>{myUserCard.name}</h3>
            <div>{myUserCard.location}</div>
            <img className='photo'src={`${myUserCard.avatar_url}`} alt='id'/>
            <div className='info-under-photo'>UserName: {myUserCard.login}</div>
            <div className='info-under-photo'>{myUserCard.bio}</div>
            <div className='info-under-photo'>Repositories: {myUserCard.public_repos}</div>
            <div className='info-under-photo'>Followers:{myUserCard.followers}</div>
            <div className='info-under-photo'>Following:{myUserCard.following}</div>
        </div>
    )
}

export default MyUserCard;