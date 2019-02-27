import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render () {
        const { user } = this.props;
        if (! user) {
            return null;
        }
        return (
            <h6 className="user-header" data-user-id={ this.props.userId }>
                { user.name } (#ID: { user.id })
            </h6>
        );
    };
};

const mstp = (state, ownProps) => {
    return { user: state.users.find( user => user.id === ownProps.userId ) };
};

export default connect(mstp)(UserHeader);
