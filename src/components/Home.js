import React from 'react'
import { username, city } from '../data/user'

function Home() {
  return (
    <div id="home">
      <h1>
        {' '}
        {username}
        is a Webex Developer from {city}{' '}
      </h1>{' '}
    </div>
  )
}

export default Home
