import React, { useState } from 'react'
import Friend from './Friend'
import FormAddFriend from './FormAddFriend'
import Button from './Button'

function FriendsList( {data} ) {
  const [showForm, setShowForm] =useState(false)

  function handleShowForm(e){
    setShowForm(!showForm)
    
  }

  return (
    <>
    <ul>
      {data.map((friend)=> <Friend 
      key={friend.id}
      friend={friend} //friend object
      />)}
      <button onClick={handleShowForm} className='button'>Add Friend</button>
      {showForm && <FormAddFriend />}
    </ul>
    </>
  )
}

export default FriendsList