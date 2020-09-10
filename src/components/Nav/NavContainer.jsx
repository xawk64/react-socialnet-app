import React from 'react'
import Nav from './Nav'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class NavContainer extends React.Component {
  refresh = () => {
    this.props.history.push("/login")
    setTimeout (() => this.props.history.push("/profile"), 100)
  }

  render() {
    return <Nav refresh={this.refresh}/>
  }
}

export default compose(withRouter)(NavContainer)