import React from 'react'

const Header = (props) => {
  return (
    <div className='nav'>
        <div>
            <img src={props.navLogo} alt="nav-logo" className='logo'/>
            <h2>{props.title}</h2>
        </div>
        <h5>{props.project}</h5>
    </div>
  )
}

export default Header

