import React from 'react'
import NavLink from '../modules/NavLink'
import { browserHistory } from 'react-router' // For URL Passing
import PropTypes from 'prop-types'; // React Update & ES6
var createReactClass = require('create-react-class'); // // React Update & ES6
export default createReactClass({
  contextTypes: {
    router: PropTypes.object
  },
  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value

    const repo = event.target.elements[1].value
    //const path = '/eventlist/'+userName+'/'+repo
    const path = '/eventlist/facebook/react'
    this.context.router.push(path)
  },
  render() {
    console.log(PropTypes);
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/eventlist/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/eventlist/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
 
      </div>
    )
  }
})
