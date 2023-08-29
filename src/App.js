import { useState, useEffect } from "react"

const App = () => {
  const [advice, setAdvice] = useState('')

  const handler = async () => {
    let response = await fetch("https://api.adviceslip.com/advice")
    let data = await response.json()
    setAdvice(data.slip)
  }

  useEffect(() => {
    handler()
  }, [])
  return (
    <div>
      <h1>my sight again</h1>
      <button onClick={handler}>click</button>
      <h2>{advice.advice}</h2>
    </div>
  )
}

export default App



// import React from "react"

// class App extends React.Component {
//   state = {
//     num: 0
//   }
//   componentDidMount() {
//     console.log('component did mount')
//     this.setState({num: this.state.num + 1})
//   }
//   componentDidUpdate() {
//     console.log('there has been an update')
//   }
//   render() {
//     return (
//       <div>
//         <h1>my sight</h1>
//         <h2>{this.state.num}</h2>
//         <button onClick={() => this.setState({num: this.state.num + 1})}>+</button>
//       </div>
//     )
//   }
// }

// export default App