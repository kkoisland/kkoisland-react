import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Top = (): ReactElement => {
  return (
        <><div>
      Welcome Top page!
    </div>
    <ul>
      <Link to="/profile">Profile</Link>
      {/* <Link to="/github">Github</Link>
      <Link to="/linkedin">Linked In</Link>
      <Link to="/twitter">Twitter</Link>
      <Link to="/blog">Blog</Link> */}
    </ul></>
  )
}

export default Top
