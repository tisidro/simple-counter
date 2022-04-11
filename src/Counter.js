import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
  //overrides constructor
  constructor (props) {
    //makes sure props are set properly when you override constructor
    super(props)

    //sets state to props you pass in for initial count in app.js
    this.state = {
      count: props.initialCount
    }
  }

  render () {
    return (
      //consuming ThemeContext
      <ThemeContext.Consumer>
        {style => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            {/* state is now tied to initial count via object for this.state above */}
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }

  /*changeCount function takes in a parameter "amount" then changes the count for the current state by amount by changeCount (1) amount input when + button is clicked
  and it decreases when - button is clicked b/c that changeCount input amount is a negative value. this.setState takes care of re-render!
  
  /*changeCount (amount) {
    this.setState({ count: this.state.count + amount })
  }

  BUT...BETTER YET, USE...*/

  changeCount (amount) {
    //function version takes into account the previous state--would work if you wanted to call it twice--  have click increment by more than 1 for example
    this.setState(prevState => {
      return { count: prevState.count + amount }
    })
  }
}
