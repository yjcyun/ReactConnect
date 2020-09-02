// Google OAuth Documentation
// https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions/authActions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '730584662758-pcn0oi5mkpra2l2o89ntoi9ogisc9p91.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        const GoogleAuth = window.gapi.auth2
        this.auth = GoogleAuth.getAuthInstance();
        // Listen for sign-in state changes
        // Handle initial sign-in state (Determine if user is already signed in)
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

  // Update state
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.props.signOut();
  }

  // Render login button
  renderAuthButton = () => {
    if (this.props.isSignedIn === null) return null;
    else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick}>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick}>
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)