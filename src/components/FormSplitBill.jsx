import React, { useState } from 'react'
import Button from './Button'

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const paidByFriend = bill ? bill - paidByUser : ''
  const [whoIsPaying, setWhoIsPaying] = useState('user')

  function handleSplit(e){
    e.preventDefault();
    console.log('hi')
  }

  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend.name}</h2>
      
      <label>💰Bill value</label>
      <input 
        type='text' 
        value={bill} 
        onChange={(e)=> setBill(Number(e.target.value))}>
      </input>

      <label>🙋🏻‍♀️ Your expense</label>
      <input 
        type='text' 
        value={paidByUser} 
        onChange={(e)=> 
        setPaidByUser(
        Number(e.target.value) > bill ? paidByUser 
        : Number(e.target.value)

        )}>
      </input>

      <label>👥 {selectedFriend.name}'s expense</label>
      <input type='text' value={paidByFriend} disabled></input>

      <label>🤑 Who is paying the bill?</label>
      <select value={whoIsPaying} onChange={(e)=> setWhoIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button onClick={()=> handleSplit}>Split bill</Button>
      
      
    </form>
  )
}

export default FormSplitBill