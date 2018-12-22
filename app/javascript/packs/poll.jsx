import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      currentQuestion: 0
    };
  }
  
  componentDidMount() {
    const data = {"id":1,"title":"Conferencia Volkwageros","slug":"vw","user_id":1,"questions":[{"id":1,"sentence":"¿Cómo te pareció el evento?","position":1,"poll_id":1,"choices":[{"id":1,"sentence":"Excelente","position":1,"question_id":1},{"id":2,"sentence":"Normal","position":2,"question_id":1},{"id":3,"sentence":"Pésimo","position":3,"question_id":1}]},{"id":2,"sentence":"El precio fue...","position":2,"poll_id":1,"choices":[{"id":4,"sentence":"Barato","position":1,"question_id":2},{"id":5,"sentence":"Justo","position":2,"question_id":2},{"id":6,"sentence":"Caro","position":3,"question_id":2}]},{"id":3,"sentence":"¿Volverías el año próximo?","position":3,"poll_id":1,"choices":[{"id":7,"sentence":"Seguro","position":1,"question_id":3},{"id":8,"sentence":"No sé","position":2,"question_id":3},{"id":9,"sentence":"No","position":3,"question_id":3}]}]}
    
    this.setState({
      poll: data,
      question: data.questions[0].sentence
    });
  }
  
  render() {
    return (
      <div>
        <Question sentence={this.state.question} />
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
  constructor(props) {
    super(props);
   
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(id) {
    console.log('The link was clicked.' + id);
  }
  
  render() {
    return (
      <div className="col-12 text-center">
        <button className={`btn btn-${this.props.color} btn-lg`}
                onClick={this.handleClick.bind(this, 99)}>
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
    <Poll choice1="EXCELENTE"
          choice2="REGULAR"
          choice3="PÉSIMO"/>,
    document.getElementById('react-poll')
  )
})