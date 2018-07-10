import React from 'react'
import ReactDOM from 'react-dom'
import Home from './scenes/Home/Home'

require('./index.css')

class App extends React.Component {
  render () {
    return (
      <Home />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
