import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

const Header = (): ReactElement => {
  return (
    <><div>Header here <Link to="/">Back to Top</Link></div></>
  )
}

export default Header
