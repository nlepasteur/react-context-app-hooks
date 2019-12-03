import React, { useState, useEffect } from 'react'
import FormList from './FormList'
import uuid from 'uuid/v1'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Quando sono con te', id: 1 },
    { title: 'Buon compleano', id: 2 },
    { title: 'Felicita putana', id: 3 }
  ])

  const [test, setTest] = useState(18)

  useEffect(() => {
    console.log('uE called for TITLES', songs)
  }, [songs])

  useEffect(() => {
    console.log('uE called for NUMBER', test)
  }, [test])

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }])
  }

  return (
    <div className='song-list'>
      <FormList addSong={addSong} />
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>

      <button onClick={() => setTest(test + 1)}>{test}</button>
    </div>
  )
}

export default SongList