import Friend from './Friend'

function FriendsList( {data} ) {
  
  return (
    <>
    <ul>
      {data.map((friend)=> <Friend 
      key={friend.id}
      friend={friend} //friend object
      />)}
    </ul>
    </>
  )
}

export default FriendsList