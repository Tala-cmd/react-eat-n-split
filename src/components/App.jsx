import FriendsList from './FriendsList'
import FormAddFriend from './FormAddFriend'
import FormSplitBill from './FormSplitBill'
import Button from './Button';
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  
  function handleShowAddFriend(){
    setShowAddFriend(!showAddFriend)
  }

  function handleAddFriend(friend){
    setFriends((friends)=> [...friends, friend])
    setShowAddFriend(false)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList data={initialFriends} friends={friends}/>
        { showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} /> }
        <Button onClick={handleShowAddFriend}>
          {showAddFriend? 'Close' : 'Add Friend'}</Button> 
      </div>
      <FormSplitBill />
    </div>
  )
}

export default App
