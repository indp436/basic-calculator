import {Component} from 'react'
import './index.css'

class Calculator extends Component {
  state = {
    ans: 0,
    firstValue: 0,
    isFunctionStarted: false,
    count: 0,
    sign: '',
    multiplyCount: 0,
    divideCount: 0,
  }

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

    this.setState(prevState => ({
      firstValue: prevState.firstValue + parseFloat(ans),
      ans: 0,
      sign: '+',
      isFunctionStarted: false,
    }))
  }

  minusButtonClicked = () => {
    const {count} = this.state
    if (count === 0) {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        ans: 0,
        firstValue: ans,
        count: prevState.count + 1,
        sign: '-',
        isFunctionStarted: false,
      }))
    } else {
      let {ans} = this.state

      ans = parseFloat(ans)
      this.setState(prevState => ({
        firstValue: prevState.firstValue - ans,
        count: prevState.count + 1,
        ans: 0,
        sign: '-',
        isFunctionStarted: false,
      }))
    }
  }

  intoButtonClicked = () => {
    const {multiplyCount} = this.state
    console.log(multiplyCount)
    if (multiplyCount === 0) {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        ans: 0,
        firstValue: ans,
        multiplyCount: prevState.multiplyCount + 1,
        sign: '*',
        isFunctionStarted: false,
      }))
    } else {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        firstValue: prevState.firstValue * ans,
        multiplyCount: prevState.multiplyCount + 1,
        ans: 0,
        sign: '*',
        isFunctionStarted: false,
      }))
    }
  }

  dividedButtonClicked = () => {
    const {divideCount} = this.state
    if (divideCount === 0) {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        ans: 0,
        firstValue: ans,
        divideCount: prevState.divideCount + 1,
        sign: '/',
        isFunctionStarted: false,
      }))
    } else {
      let {ans} = this.state
      ans = parseFloat(ans)
      this.setState(prevState => ({
        firstValue: prevState.firstValue / ans,
        divideCount: prevState.divideCount + 1,
        ans: 0,
        sign: '/',
        isFunctionStarted: false,
      }))
    }
  }

  equalsButtonClicked = () => {
    const {ans, sign} = this.state
    this.setState(prevState => ({
      count: prevState.count + 1,
      divideCount: prevState.divideCount + 1,
    }))
    if (sign === '+') {
      this.setState(prevState => ({
        firstValue: prevState.firstValue + parseFloat(ans),
      }))
      this.setState({isFunctionStarted: true})
      this.setState({ans: 0})
    } else if (sign === '-') {
      this.setState(prevState => ({
        firstValue: prevState.firstValue - parseFloat(ans),
      }))
      this.setState({isFunctionStarted: true})
      this.setState({ans: 0})
    } else if (sign === '*') {
      this.setState(prevState => ({
        firstValue: prevState.firstValue * parseFloat(ans),
      }))
      this.setState({isFunctionStarted: true})
      this.setState({ans: 0})
    } else if (sign === '/') {
      this.setState(prevState => ({
        firstValue: prevState.firstValue / parseFloat(ans),
      }))
      this.setState({isFunctionStarted: true})
      this.setState({ans: 0})
    }
  }

  clearButtonClicked = () => {
    this.setState({
      ans: 0,
      firstValue: 0,
      isFunctionStarted: false,
      sign: '',
      count: 0,
      multiplyCount: 0,
      divideCount: 0,
    })
  }

  render() {
    const {firstValue, ans, isFunctionStarted} = this.state
    // console.log(firstValue)

    return (
      <div className="bg">
        <div className="cal-container">
          <p className="result-container">
            {isFunctionStarted ? firstValue : ans}
          </p>
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
