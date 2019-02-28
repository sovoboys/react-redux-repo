import React from 'react';

import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount () {
        const { gapi } = window;
        gapi.load('client:auth2', () => {
            gapi.client.init({
                clientId: '126505501782-ck74l3ker73gsdf0l5gm6kooc0n617l8.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChanged);
            });
        });
    };

    onAuthChanged = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInBtnClicked = () => {
        this.auth.signIn();
    };

    onSignOutBtnClicked = () => {
        this.auth.signOut();
    };

    renderAuthBtn = () => {
        if (this.props.isSignedIn === null) {
            return "";
        } else if (this.props.isSignedIn) { 
            return (
                <button type="button" className="btn-small red white-text" onClick={ this.onSignOutBtnClicked }>
                    Sign out
                </button>
            );
        } else {
            return (
                <button type="button" className="btn-small green white-text" onClick={ this.onSignInBtnClicked }>
                    Sign in
                </button>
            );
        }
    };
    
    render () {
        return (
            <div className="google-auth">{ this.renderAuthBtn() }</div>
        );
    };
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);