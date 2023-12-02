import Friend from './Friend'

function FriendsList({  friends, onSelection, selectedFriend }) {
  
  return (
    <>
    <ul>
      {friends.map((friend)=> 
      <Friend 
      key={friend.id}
      friend={friend} //friend object
      selectedFriend={selectedFriend}
      onSelection={onSelection}
      />)}
    </ul>
    </>
  )
}

export default FriendsList