import React from 'react'
import { Link } from 'react-router'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'


export default React.createClass({
  render() {
    console.log(this);
    return (
      <div>
        {/*<h1>React Router Tutorial</h1>*/}
        {/*<ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>*/}
        {/*or*/}
        <ul role="nav">
          {/*<li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>*/}
          {/*or*/}
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
})