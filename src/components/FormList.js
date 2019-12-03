import React, { useState, useEffect } from 'react'

const FormList = ({ addSong }) => {
  const [title, setTitle] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    addSong(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleChange}>
      <label>Add a title you like :
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <input type='submit' />
    </form>
  )
}

export default FormList