import { useState, useEffect } from "react"

const App = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log("updated")
  }, [num])


  return (
    <div>
      <h1>my sight again</h1>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>+</button>
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