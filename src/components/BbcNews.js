import { useState } from "react"
import { img1 } from './images'
const BbcNews = () => {
    const [articles, setArticles] = useState([
        {title: 'title text', img: img1, timeStamp: '1 hour'},
        {title: 'title text', img: img1, timeStamp: '1 hour'},
        {title: 'title text', img: img1, timeStamp: '1 hour'},
        {title: 'title text', img: img1, timeStamp: '1 hour'},
        {title: 'title text', img: img1, timeStamp: '1 hour'},
        {title: 'title text', img: img1, timeStamp: '1 hour'},
    ])
    return (
        <div>
            <h1>bbc</h1>
        </div>
    )
}