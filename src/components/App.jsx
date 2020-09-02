import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav';
import PatientPage from '../pages/PatientPage';

function App() {
  return (
    <div className='app'>
      <SideNav />
      <Switch>
        <Route exact path='/' component={PatientPage} />
      </Switch>
    </div>
  );
}



export default App;