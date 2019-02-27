import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';

import UserHeader from './user_header';

class PostList extends React.Component {

    componentDidMount () {
        this.props.fetchPostsAndUsers();
    }

    renderPostRecords = () => {
        return this.props.posts.map( (post) => {
            return (
                <div key={ post.id } className="post col s12 m10 offset-m1 l8 offset-l2">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s3 m3 l2">
                                <img src={`https://robohash.org/${ post.userId }.png?set=set1`} className="circle responsive-img" />
                            </div>
                            <div className="col s9 m9 l10">
                                <h5 className="black-text">{ post.title }</h5>
                                <p className="description grey-text text-darken-4">{ post.body }</p>
                                <UserHeader userId={ post.userId } />
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render () {
        return (
            <div className="post-list">
                { this.renderPostRecords() }
            </div>
        );
    };
};

const mstp = (state) => {
    return state;
};

export default connect(mstp, { fetchPostsAndUsers })(PostList);
