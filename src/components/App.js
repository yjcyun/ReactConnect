import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Route exact path='/' component={StreamList} />
          <Route path='/streams/new' component={StreamCreate} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/delete' component={StreamDelete} />
          <Route path='/streams/show' component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;