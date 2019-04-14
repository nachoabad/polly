import React      from 'react'
import ReactDOM   from 'react-dom'
import PropTypes  from 'prop-types'
import axios      from 'axios'
import Choice     from './Choice'
import Question   from './Question'

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      choices: [],
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
      question: question.sentence,
      choices:  question.choices
    });
  }

  render() {
    if (!this.state.pollCompleted) {
      return (
        <div>
          <Question sentence={this.state.question} />
          <div className="row">
            {this.state.choices.map(choice => (
              <Choice
                key={choice.id}
                color={choice.color}
                sentence={choice.sentence}
                onClick={() => this.handleClick(choice.id)}
              />
            ))}
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

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('react-poll')
  const slug = node.dataset.slug
  ReactDOM.render(
    <Poll slug={slug}/>,
    node
  )
})