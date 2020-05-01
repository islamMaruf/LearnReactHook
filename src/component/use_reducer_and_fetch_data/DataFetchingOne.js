import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchingOne(props) {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
            result => {
                setLoading(false);
                setPost(result.data);
                setError('');
            }).catch(e => {
            setLoading(true);
            setPost({});
            setError('some thing went wrong');
        })
    }, []);
    return (
        <div>
            <p>{loading ? 'loading' :  post.title}</p>
            <p>{error ? error : ''}</p>
        </div>
    );
}

export default DataFetchingOne;