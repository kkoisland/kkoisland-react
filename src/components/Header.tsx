import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = (): ReactElement => {
  const iconStyle: React.CSSProperties = { padding: '0 10px', fontSize: 20 }
  return (
    <>
      <div style={{ textAlign: 'right', padding: '0 10px' }}>
        <Link to="/" style={iconStyle}>
          Top
        </Link>
        <Link to="/profile" style={iconStyle}>
          About
        </Link>
        <Link to="/post1" style={iconStyle}>
          Articles
        </Link>
        <Link to="/blogpast" style={iconStyle}>
          Past Blog
        </Link>
        <a href="https://github.com/kkoisland" target="_blank" rel="noreferrer">
          <FontAwesomeIcon style={iconStyle} icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/keiko-higuchi-b554449/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon style={iconStyle} icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://twitter.com/kkoisland"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
        </a>
      </div>
    </>
  )
}

export default Header
