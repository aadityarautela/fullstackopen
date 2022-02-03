import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}.</p>
    </div >
  )
}

const App = () => {
  const name = "Bob"
  const age = 22
  return (
    <>
      <h1>G'day Mate</h1>
      <Hello name={name} age={age} />
    </>
  )
}

export default App