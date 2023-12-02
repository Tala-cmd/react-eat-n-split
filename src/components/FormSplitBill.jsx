import React, { useState } from 'react'
import Button from './Button'

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState(0)

  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend.name}</h2>
      
      <label>💰Bill value</label>
      <input type='text' value={bill} onChange={(e)=> setBill(e.target.value)} ></input>

      <label>🙋🏻‍♀️ Your expense</label>
      <input type='text'></input>

      <label>👥 {selectedFriend.name}'s expense</label>
      <input type='text' value={bill} disabled></input>

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
      
      
    </form>
  )
}

export default FormSplitBill