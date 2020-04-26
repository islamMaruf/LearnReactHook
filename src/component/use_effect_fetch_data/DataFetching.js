import React, {useState, useEffect} from "react";
import axios from "axios";
function DataFetching() {
    const [post, setPost] = useState({});
    const [id,setId] = useState(1);
    const [idFromLink,setIdFromLink] = useState(1);
    const handleClick  =  () => {
        setIdFromLink(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromLink}`)
            .then(res => {
                setPost(res.data)
            }).catch(err => console.log(err))
    },[idFromLink]);

    return (
        <div>
            <input type="text" value={id} onChange={ (e) => { setId(e.target.value)}}/>
            <button onClick={handleClick}>fetch</button>
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    )

}

export default DataFetching;