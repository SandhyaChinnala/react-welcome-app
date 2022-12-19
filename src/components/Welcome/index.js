// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    const {isSubscribed} = this.state
    this.setState(() => ({isSubscribed: true}))
  }

  onSubscribed = () => {
    const {isSubscribed} = this.state
    this.setState(() => ({isSubscribed: false}))
  }

  render() {
    const {isSubscribed} = this.state
    let subscribeBtn
    if (isSubscribed) {
      subscribeBtn = (
        <button type="button" className="btn" onClick={this.onSubscribed}>
          Subscribed
        </button>
      )
    } else {
      subscribeBtn = (
        <button type="button" className="btn" onClick={this.onSubscribe}>
          Subscribe
        </button>
      )
    }

    return (
      <div className="app-container">
        <div className="welcome-container">
          <h1 className="title">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          {subscribeBtn}
        </div>
      </div>
    )
  }
}

export default Welcome
