import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Header extends Component  {

  render() {

    return (
    <h2 className="Header text-center">
      {this.props.message}
    </h2>
  );

  }

}

Header.defaultProps = {
  message:"test"
}
export default Header;
