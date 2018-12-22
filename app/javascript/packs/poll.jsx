import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {question: new Date()};
  }
  
  render() {
    return (
      <div>
        <Question sentence={this.props.question} />
        <div className="row">
          <Choice color="success" sentence={this.props.choice1} />
          <Choice color="neutral" sentence={this.props.choice2} />
          <Choice color="danger"  sentence={this.props.choice3} />
        </div>
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    return (
      <h3>{this.props.sentence}</h3>
    );
  }
}

class Choice extends React.Component {
  render() {
    return (
      <div className="col-12 text-center">
        <button className={`btn btn-${this.props.color} btn-lg`}>
          {this.props.sentence}
        </button>
      </div>
    );
  }
}

Poll.defaultProps = {
  name: 'David'
}

Poll.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Poll question="¿Qué te pareció el sonido del concierto?"
          choice1="EXCELENTE"
          choice2="REGULAR"
          choice3="PÉSIMO"/>,
    document.getElementById('react-poll')
  )
})