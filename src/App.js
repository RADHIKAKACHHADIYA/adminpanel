import { Route, Switch } from 'react-router-dom';
import './App.css';
import Daseborad from './Containers/Daseborad/Daseborad';
import Doctor from './Containers/Doctor/Doctor';
import Medicine from './Containers/Medicine/Medicine';
import Patients from './Containers/Patients/Patients';
import Layout from './Components/Layout/Layout';
import { Provider } from 'react-redux';
import configureStore from './redux/store';


function App() {
  const store = configureStore();
  return (
    <>
    <Provider store={store}>
      <Layout>
        <Switch>
            <Route exact path="/" component={Daseborad}/>
            <Route  path="/doctor" component={Doctor}/>
            <Route  path="/medicine" component={Medicine}/>
            <Route  path="/patients" component={Patients}/>
        </Switch>
      </Layout>
      </Provider>
    </>
  );
}

export default App;
