// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSubmitted: false}

  onClickSubmit = () => {
    this.setState({isFeedbackSubmitted: true})
  }

  giveFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(eachItem => (
            <li className="list-item" key={eachItem.id}>
              <button
                type="button"
                onClick={this.onClickSubmit}
                className="button"
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emojiImg"
                />
              </button>

              <label className="label">{eachItem.name}</label>
            </li>
          ))}
        </ul>
      </>
    )
  }

  thankYouFun = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="submitted-container">
        <img src={loveEmojiUrl} className="emojiImg" alt="love emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="label">
          we will use your feedback to increase our customer service performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSubmitted} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          {isFeedbackSubmitted ? this.thankYouFun() : this.giveFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
