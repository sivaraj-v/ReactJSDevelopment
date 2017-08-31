// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
  	// console.log(this);
  	// ... is  spread operator
    return <Link {...this.props} activeClassName="active"/>
  }
})
