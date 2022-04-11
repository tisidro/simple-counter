import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

// functional components get the props passed in directly unlike class
export default function CounterHooks ({ initialCount }) {
  //   //useState function returns array, so we must deconstruct it to [state, setState]--can call these whatever you want
  //   //first value in array is the actual state, second value is a function that allows us to set that state

  const [count, setCount] = useState(initialCount)
  //useState is the same as this.state in class component. It returns our current state, this.state and setState which is this.setState

  const style = useContext(ThemeContext)

  return (
    <div>
      <button
        style={style}
        onClick={() => setCount(prevCount => prevCount - 1)}
      >
        -
      </button>
      {/* reference initial count via state object */}
      <span>{count}</span>
      <button
        style={style}
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        +
      </button>
    </div>
  )
}

// export default function CounterHooks ({ initialCount }) {
//   const [count, setCount] = useState(initialCount)
//   return (
//     <div>
//       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//       <span>{count}</span>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//     </div>
//   )
// }
