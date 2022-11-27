import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Top = (): ReactElement => {
  const contentStyle: React.CSSProperties = { padding: '0 10px', fontSize: 20 }
  return (
    <>
      <div style={{ textAlign: 'center', padding: '30px' }}>
        <h3>Hello, I am a Front-end software engineer based in San Francisco Bay
        Area.</h3>
        <Link to="/profile" style={contentStyle}>About</Link>
        <Link to="/post1" style={contentStyle}>Articles</Link>
        <Link to="/blogpast" style={contentStyle}>Past Blog</Link>
      </div>
    </>
  )
}

export default Top
