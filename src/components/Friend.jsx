import React from "react";
import FriendsList from "./FriendsList";

function Friend({ friend }) {
return (
  <>
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
          <p className="red">{`You owe ${friend.name} ${Math.abs(friend.balance)}$`}</p>
      ) : friend.balance === 0 ? (
          <p>{`You and ${friend.name} are even`}</p>
      ) : (
          <p className="green">{`Sarah owes you ${friend.balance}$`}</p>
      )}
      <button className="button">Select</button>
    </li>
  </>
);
}

export default Friend;