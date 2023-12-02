import React, { useState } from 'react'
import Button from './Button'

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  function handleSubmit(e){
  e.preventDefault();

  const id= crypto.randomUUID();

  if(!name || !image) return;

  const newFriend = {
    id, 
    name, 
    image:`${image}?=${id}`, 
    balance:0
  }
    onAddFriend(newFriend)

    setName('')
    setImage('https://i.pravatar.cc/48')

  }
  
  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>🤝Friend Name</label>
      <input value={name} onChange={(e)=> setName(e.target.value)} type='text'></input>

      <label>📸Image URL</label>
      <input value={image} onChange={(e)=> setImage(e.target.value)} type='text'></input>
      <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend