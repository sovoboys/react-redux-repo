import React from 'react';
import PostList from './post_list';

class App extends React.Component {
    render () {
        return (
            <div className="app container">
                <PostList />
            </div>
        );
    }
}

export default App;