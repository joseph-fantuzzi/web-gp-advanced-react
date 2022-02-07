import React from 'react'

const initialState = {
  quotes: [{ author: 'Gabe', text: 'Do not troll Gabe' }],
  error: 'No error, everything is cool!',
}

export default class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = initialState
  // }
  state = initialState

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>It is working</h2>
        <div id="error">Error: {this.state.error}</div>
        <div>Quotes:</div>
        <ul>
          {
            this.state.quotes.map(qo => (
              <li>{qo.author} sayz {qo.text}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
