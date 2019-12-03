import React, { useState } from 'react'
import uuid from 'uuid/v1'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Quando sono con te', id: 1 },
    { title: 'Buon compleano', id: 2 },
    { title: 'Felicita putana', id: 3 }
  ])

  const addSong = () => {
    setSongs([...songs, { title: 'Fatte spuglia', id: uuid() }])
  }

  return (
    <div className='song-list'>
      <button onClick={addSong}>Add a song</button>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SongList