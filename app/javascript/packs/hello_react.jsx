import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Poll = props => (
  <div>Poll {props.name}!</div>
)

Poll.defaultProps = {
  name: 'David'
}

Poll.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Poll name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
