import {Component} from 'react'
import './index.css'

class Calculator extends Component {
  state = {ans: 0, firstValue: null, secondValue: null, func: null}

  buttonClicked = event => {
    let {ans} = this.state
    ans = ans.toString()

    if (ans[0] === '0') {
      ans = ans.substring(1)
    }
    this.setState(prevState => ({
      ans: ans + event.target.value,
    }))
  }

  plusButtonClicked = () => {
    const {ans} = this.state
    this.setState({ans: 0, firstValue: parseInt(ans)})
    this.setState({func: '+'})
  }

  minusButtonClicked = () => {
    const {ans} = this.state
    this.setState({ans: 0, firstValue: parseInt(ans)})
    this.setState({func: '-'})
  }

  intoButtonClicked = () => {
    const {ans} = this.state
    this.setState({ans: 0, firstValue: parseInt(ans)})
    this.setState({func: '*'})
  }

  dividedButtonClicked = () => {
    const {ans} = this.state
    this.setState({ans: 0, firstValue: parseInt(ans)})
    this.setState({func: '/'})
  }

  equalsButtonClicked = () => {
    const {ans} = this.state
    this.setState({secondValue: parseInt(ans)})
    this.setState({ans: 0})
  }

  clearButtonClicked = () => {
    this.setState({ans: 0, firstValue: null, secondValue: null, func: null})
  }

  render() {
    const {firstValue, secondValue, func} = this.state
    let {ans} = this.state
    if (secondValue !== null) {
      if (func === '+') {
        ans = firstValue + secondValue
      } else if (func === '-') {
        ans = firstValue - secondValue
      } else if (func === '*') {
        ans = firstValue * secondValue
      } else if (func === '/') {
        ans = firstValue / secondValue
      }
    }

    return (
      <div className="bg">
        <div className="cal-container">
          <p className="result-container">{ans}</p>
          <div className="buttons-container">
            <button
              type="button"
              className="btn"
              onClick={this.plusButtonClicked}
            >
              +
            </button>
            <button
              type="button"
              className="btn"
              onClick={this.minusButtonClicked}
            >
              -
            </button>
            <button
              type="button"
              className="btn"
              onClick={this.intoButtonClicked}
            >
              *
            </button>
            <button
              type="button"
              className="btn divide"
              onClick={this.dividedButtonClicked}
            >
              \
            </button>
            <div className="digits-container">
              <div className="digit-container">
                <button
                  type="button"
                  className="btn"
                  value="7"
                  onClick={this.buttonClicked}
                >
                  7
                </button>
                <button
                  type="button"
                  className="btn"
                  value="8"
                  onClick={this.buttonClicked}
                >
                  8
                </button>
                <button
                  type="button"
                  className="btn"
                  value="9"
                  onClick={this.buttonClicked}
                >
                  9
                </button>
                <button
                  type="button"
                  className="btn"
                  value="4"
                  onClick={this.buttonClicked}
                >
                  4
                </button>
                <button
                  type="button"
                  className="btn"
                  value="5"
                  onClick={this.buttonClicked}
                >
                  5
                </button>
                <button
                  type="button"
                  className="btn"
                  value="6"
                  onClick={this.buttonClicked}
                >
                  6
                </button>
                <button
                  type="button"
                  className="btn"
                  value="1"
                  onClick={this.buttonClicked}
                >
                  1
                </button>
                <button
                  type="button"
                  className="btn"
                  value="2"
                  onClick={this.buttonClicked}
                >
                  2
                </button>
                <button
                  type="button"
                  className="btn"
                  value="3"
                  onClick={this.buttonClicked}
                >
                  3
                </button>
                <button
                  type="button"
                  className="btn"
                  value="0"
                  onClick={this.buttonClicked}
                >
                  0
                </button>
                <button
                  type="button"
                  className="btn"
                  value="."
                  onClick={this.buttonClicked}
                >
                  .
                </button>
                <button
                  type="button"
                  className="btn clear"
                  onClick={this.clearButtonClicked}
                >
                  Clear
                </button>
              </div>
              <div className="equal-container">
                <button
                  className="btn isEqualBtn"
                  type="button"
                  onClick={this.equalsButtonClicked}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Calculator
