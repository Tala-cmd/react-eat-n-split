import Friend from './Friend'

function FriendsList({  friends }) {
  
  return (
    <>
    <ul>
      {friends.map((friend)=> <Friend 
      key={friend.id}
      friend={friend} //friend object
      />)}
    </ul>
    </>
  )
}

export default FriendsList