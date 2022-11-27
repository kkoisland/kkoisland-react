import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Top = (): ReactElement => {
  return (
  <><div>
      Hello, this is Top page, contents are hrere:
    </div>
    <ul>
    <li><Link to="/profile">Profile</Link></li>
    <li><Link to="/post1">Post1</Link></li>
    <li><Link to="/blogpast">Past Blog</Link></li>
    </ul></>
  )
}

export default Top
