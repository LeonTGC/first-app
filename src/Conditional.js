import { useState } from "react"

const Conditional = () => {
    const [toggle, setToggle] = useState(true)

    // if(toggle === false){
    //     return (
    //         <div>
    //             <h1>toggle is false</h1>
    //             <button onClick={() => setToggle(!toggle)}>press</button>
    //         </div>
    //     )
    // }

    return (
        <div>
            {toggle ? <h1>true</h1> : <h1>false</h1>}
            <button onClick={() => setToggle(!toggle)}>press</button>
        </div>
    )
}

export default Conditional