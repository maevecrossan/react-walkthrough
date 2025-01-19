import React, {Component} from 'react';
import axios from 'axios';

/* 
1. npm install axios and import into the component.
2. Call axios.get('API_URL') in componentDidMount to fetch the data.
    - API url used: https://jsonplaceholder.typicode.com/
3. Call setState() to update the data in the state.
4. render the UI based on the new state values.
*/

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: null,
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
            this.setState({
                posts: Array.isArray(response.data) 
                ? response.data
                : [response.data]
            })
        })
        .catch(error => {
            this.setState ({
                error: error.message
            })
        })
    }

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts:</h2>
                {
                    posts.length ? (
                        posts.map(post =>
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By user ID {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        )
                    ) : (
                        this.state.error 
                        ? 
                        <p>{this.state.error}</p>
                        :
                        <h4>Loading posts...</h4>
                    )
                }
            </div>
        )
    }
}

export default HTTPRequests
