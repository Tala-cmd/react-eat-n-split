import React from 'react'
import Friend from './Friend'

function FriendsList( {data} ) {
  return (
    <>
    <ul>
      {data.map((friend)=> <Friend 
      key={friend.id}
      friend={friend} //friend object
      />)}
      <button className='button'>Add Friend</button>
    </ul>
    </>
  )
}

export default FriendsList