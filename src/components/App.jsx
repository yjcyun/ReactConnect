import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNav from './SideNav';
import PatientPage from '../pages/PatientPage';
import PatientCreate from './patients/PatientCreate';
import PatientEdit from './patients/PatientEdit';
import PatientDelete from './patients/PatientDelete';
import PatientShow from './patients/PatientShow';
import DashboardPage from '../pages/DashboardPage';

function App() {
  return (
    <div className='app'>
      <SideNav />
      <Switch>
        <Route exact path='/' component={DashboardPage} />
        <Route exact path='/patients' component={PatientPage} />
        <Route path='/patients/new' component={PatientCreate} />
        <Route path='/patients/edit/:id' component={PatientEdit} />
        <Route path='/patients/delete/:id' component={PatientDelete} />
        <Route path='/patients/:id' component={PatientShow} />
      </Switch>
    </div>
  );
}



export default App;