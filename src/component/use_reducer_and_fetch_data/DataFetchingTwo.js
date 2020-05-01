import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    post: {},
    error: ''
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS' :
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR' :
            return {
                loading: true,
                post: action.payload,
                error: 'Something went wrong'
            }
        default:
            return state;
    }
};



function DataFetchingTwo(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({type: 'FETCH_SUCCESS',payload : response.data})
            }).catch(e => {
            dispatch({ type:'FETCH_ERROR',payload: {}})
        })

    }, []);
    return (
        <div>
            <p>{state.loading ? 'loading' : state.post.title}</p>
            <p>{state.error}</p>
        </div>
    );
}

export default DataFetchingTwo;