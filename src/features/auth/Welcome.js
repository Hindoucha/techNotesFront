import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to='/dash/notes'>Notes list</Link>
      <Link to='/dash/users'>Users settings</Link>
    </div>
  )
}

export default Welcome