import React from 'react'

require('./Navbar.css')

class Navbar extends React.Component {
  render () {
    return (
      <div className='navbar'>
        <h3 className='navbar-title'>
          {this.props.title}
        </h3>
      </div>
    )
  }
}

export default Navbar
