// Google OAuth Documentation
// https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions/authActions';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';

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
        <Button className='button' onClick={this.onSignOutClick}>
          <Icon><FcGoogle /></Icon>Sign Out
        </Button>
      )
    } else {
      return (
        <Button className='button' onClick={this.onSignInClick}>
          <Icon><FcGoogle /></Icon>Sign In with Google
        </Button>
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

const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin: 5px 10px 0 0;
  font-size: 1.5rem;
`

const Button = styled.button`
   padding: 0rem 1rem;
`
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)