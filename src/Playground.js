import { useState } from "react"
const Playground = () => {
    let [persons, setPersons] = useState([
        { name: 'Dave', age: '33' },
        { name: 'Karen', age: '45' },
        { name: 'k', age: '45' },
        { name: 'bob', age: '45' },
    ])
    
    const handleClick = (index) => {
        // make a copy of the array so we can change 
        let copiedPersons = [...persons]
        // use splice to remove the item we clicked on
        copiedPersons.splice(index, 1)
        // update our state with our new changed array
        setPersons(copiedPersons)
    }

    const [num, setNum] = useState(0)

    const adder = () => {
        setNum(num + 1)
    }

    const sub = () => {
        setNum(num - 1)
    }
    return (
        <div>
            <h1>i'm a functional component</h1>
            <div>
                <button onClick={sub}>-</button>
                <h1>{num}</h1>
                <button onClick={adder}>+</button>
            </div>


            {/* {persons.map((individual, index) => {
                return <Card 
                        key={index} 
                        name={individual.name} 
                        age={individual.age}
                        handler={() => handleClick(index)}
                    />
            })} */}
        </div>
    )
}
const Card = ({ name, age, handler }) => {
    return <h1 onClick={handler}>I am {name} and I am {age} years old</h1>
}
export default Playground
