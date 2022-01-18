import { Route, Switch } from 'react-router-dom';
import './App.css';
import Daseborad from './Containers/Daseborad/Daseborad';
import Doctor from './Containers/Doctor/Doctor';
import Medicine from './Containers/Medicine/Medicine';
import Patients from './Containers/Patients/Patients';
import Layout from './Components/Layout/Layout';


function App() {
  return (
    <>
      <Layout>
        <Switch>
            <Route exact path="/" component={Daseborad}/>
            <Route  path="/doctor" component={Doctor}/>
            <Route  path="/medicine" component={Medicine}/>
            <Route  path="/patients" component={Patients}/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
