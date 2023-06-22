// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({
      isSubscribedIn: !prevState.isSubscribedIn,
    }))
  }

  renderAuthButton = () => {
    const {isSubscribedIn} = this.state

    if (isSubscribedIn === true) {
      return (
        <button className="button" type="button" onClick={this.onClickButton}>
          Subscribed
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.onClickButton}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning </p>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default Welcome
