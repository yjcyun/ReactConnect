import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '479344963192-9d13lj6r65gm73cqqc31f3seherdh2po.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }
  // Update state 
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut()
    }
  }
  // Sign in functionality
  onSignInClick = () => {
    this.auth.signIn();
  }
  // Sign out functionality
  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className='ui red google button'
          onClick={this.onSignOutClick}
        >
          <i className='google icon' />Sign Out
        </button>
      )
    } else {
      return (
        <button className='ui red google button'
          onClick={this.onSignInClick}
        >
          <i className='google icon' />Sign In with Google
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

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth)