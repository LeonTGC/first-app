import hos from '../images/hos.jpg'
import mani from '../images/mani.jpg'
import pod from '../images/pod.jpg'
import td from '../images/td.jpg'
import tdb from '../images/tdb.jpg'

const Netflix = () => {
    return (
        <div>
            <Card img={hos}/>
            <Card img={mani} />
            <Card img={pod} />
            <Card img={td} />
            <Card img={tdb} />
        </div>
    )
}

const Card = ({ img }) => {
    return <img id="card" src={img}/>
}

export default Netflix