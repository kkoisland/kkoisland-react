import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = (): ReactElement => {
  const iconStyle: React.CSSProperties = { padding: 0, fontSize: 30 }
  return (
    <><div style={{ textAlign: 'left', padding: 0 }}>Header here
      <a href="https://github.com/kkoisland" target="_blank" rel="noreferrer">
        <FontAwesomeIcon style={iconStyle} icon={faGithub}/>
      </a>
      <a href="https://www.linkedin.com/in/keiko-higuchi-b554449/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon style={iconStyle} icon={faLinkedin} size="2x"/>
      </a>
      <a href="https://twitter.com/kkoisland" target="_blank" rel="noreferrer">
        <FontAwesomeIcon style={iconStyle} icon={faTwitter} />
      </a>
    <Link to="/">Back to Top</Link>
      </div></>
  )
}

export default Header
