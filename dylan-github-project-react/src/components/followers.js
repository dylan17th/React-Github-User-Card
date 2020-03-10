import React from 'react';



const FollowersCard = props => {
    return(
        <div className='container-myUser'>
            <h3>{}</h3>
            <div>{}</div>
            <img className='photo'src={`${}`} alt='id'/>
            <div className='info-under-photo'>UserName: {}</div>
            <div className='info-under-photo'>{}</div>
            <div className='info-under-photo'>Repositories: {}</div>
            <div className='info-under-photo'>Followers:{}</div>
            <div className='info-under-photo'>Following:{}</div>
        </div>
    )
}

export default FollowersCard;