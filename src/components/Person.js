import Pet from "./Pet"

const Person = ({ name, age, petName, type }) => {
    return (
        <div>
            <h2>my name is {name}</h2>
            <p>i am {age}</p>
            <Pet petName={petName} type={type}/>
        </div>
    )
}
export default Person

