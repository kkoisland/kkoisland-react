import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Header = (): ReactElement => {
  return (
    <><div>Header here
    [<a href="https://github.com/kkoisland" target="_blank" rel="noreferrer">Github</a>]
    [<a href="https://www.linkedin.com/in/keiko-higuchi-b554449/" target="_blank" rel="noreferrer">Linked In</a>]
    [<a href="https://twitter.com/kkoisland" target="_blank" rel="noreferrer">Twitter</a>]
    [<Link to="/">Back to Top</Link>]
      </div></>
  )
}

export default Header
