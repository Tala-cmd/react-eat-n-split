import React from 'react'
import Button from './Button'

function FormAddFriend() {
  return (
    <form className='form'>
      <label>🤝Friend Name</label>
      <input type='text'></input>

      <label>📸Image URL</label>
      <input type='text'></input>
      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend