import React      from 'react'
import ReactDOM   from 'react-dom'
import PropTypes  from 'prop-types'
import axios      from 'axios'

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      currentQuestion: 0
    };
  }
  
  componentDidMount() {
    axios.get(`/${this.props.slug}.json`)
    .then(response => {
      this.setState({poll: response.data});
      this.updateQuestion(response.data, this.state.currentQuestion)
    })
    .catch(error => console.log(error))
  }
  
  createAnswers(answers) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('[name="csrf-token"]').content;
    axios.post( '/answers', { answers } )
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  handleClick(id) {
    let currentQuestion = this.state.currentQuestion
    let answers         = this.state.answers
    
    answers.push(id)
    this.setState({answers: answers});
    this.setState({currentQuestion: ++currentQuestion});
    this.updatePoll(currentQuestion);
  }
  
  updatePoll(currentQuestion) {
    if (currentQuestion == this.state.poll.questions.length) {
      this.setState({pollCompleted: true})
      this.createAnswers(this.state.answers)
    } else {
      this.updateQuestion(this.state.poll, currentQuestion)  
    }
  }
  
  updateQuestion(poll, currentQuestion) {
    const question  = poll.questions[currentQuestion]
    
    this.setState({
      question:   question.sentence,
      choice1:    question.choices[0].sentence,
      choice1_id: question.choices[0].id,
      choice2:    question.choices[1].sentence,
      choice2_id: question.choices[1].id,
      choice3:    question.choices[2].sentence,
      choice3_id: question.choices[2].id,
    });
  }
  
  renderChoice(color, sentence, id) {
    return (
      <Choice
        color={color}
        sentence={sentence}
        onClick={() => this.handleClick(id)}
      />
    );
  }
  
  render() {
    if (!this.state.pollCompleted) {
      return (
        <div>
          <Question sentence={this.state.question} />
          <div className="row">
            {this.renderChoice("success", this.state.choice1, this.state.choice1_id)}
            {this.renderChoice("neutral", this.state.choice2, this.state.choice2_id)}
            {this.renderChoice("danger",  this.state.choice3, this.state.choice3_id)}
          </div>
        </div>
      );
    } else if (this.props.slug == 'home') {
      window.location.href = '/users/sign_up';
    } else {
      return (
        <h3>¡Muchas gracias!</h3>
      );
    }
  }
}

function Question(props) {
  return <h3>{props.sentence}</h3>;
}

function Choice(props) {
  return (
    <div className="col-12 text-center">
      <button className={`btn btn-${props.color} btn-lg`}
              onClick={() => props.onClick()}
      >
        {props.sentence}
      </button>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('react-poll')
  const slug = node.dataset.slug
  ReactDOM.render(
    <Poll slug={slug}/>,
    node
  )
})