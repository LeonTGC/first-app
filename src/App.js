import './App.css'
import Person from './components/Person'
import Job from './components/Job'
const App = () => {
  return (
    <div className="App">
      <h1>my sight</h1>
      <Job job="teacher"/>
      <Job job="actor"/>
      <Job job="junior developer"/>
      <Person 
        name="leon" 
        age="32" 
        petName="theodore" 
        type="camel" 
      />
      <Person 
        name="anne"
        age="29"
        petName="harry"
        type="hamster"
      />
    </div>
  )
}
export default App

