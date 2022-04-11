import React, { useState } from 'react'
import Counter from './Counter.js'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App () {
  const [theme, setTheme] = useState('red')

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h1>Two Counters with Theme Context: </h1>
      <h3>One Class Based Component, One Functional</h3>
      <h4>Press toggle button to see color theme change for buttons!</h4>
      <div>
        Class Based Component
        <Counter initialCount={0} />
        Functional Component Counter With Hooks
        <CounterHooks initialCount={0} />
      </div>

      <button
        onClick={() =>
          setTheme(prevTheme => {
            return prevTheme === 'red' ? 'blue' : 'red'
          })
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  )
}

export default App
