import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Top = (): ReactElement => {
  return (
        <><div>
      Welcome Top page!
    </div>
    <ul>
    <li><Link to="/profile">Profile</Link></li>
    <li><a href="https://github.com/kkoisland" target="_blank" rel="noreferrer">Github</a></li>
    <li><a href="https://www.linkedin.com/in/keiko-higuchi-b554449/" target="_blank" rel="noreferrer">Linked In</a></li>
    <li><a href="https://twitter.com/kkoisland" target="_blank" rel="noreferrer">Twitter</a></li>
    <li><Link to="/blogpast">Past Blog</Link></li>
    </ul></>
  )
}

export default Top
