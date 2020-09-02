import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PatientPage from '../pages/PatientPage';
import PatientCreate from './patients/PatientCreate';
import PatientEdit from './patients/PatientEdit';
import PatientDelete from './patients/PatientDelete';
import PatientShow from './patients/PatientShow';
import DashboardPage from '../pages/DashboardPage';
import SideNav from './SideNav';
import Header from './Header';

function App() {
  return (
    <div className='app'>
      <SideNav />
      <main>
        <Header />
        <div className='content-section'>
          <Switch>
            <Route exact path='/' component={DashboardPage} />
            <Route exact path='/patients' component={PatientPage} />
            <Route path='/patients/new' component={PatientCreate} />
            <Route path='/patients/:id' component={PatientEdit} />
            <Route path='/patients/:id' component={PatientDelete} />
            <Route path='/patients/:id' component={PatientShow} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;