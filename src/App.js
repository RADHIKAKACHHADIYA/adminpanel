import { Route, Switch } from 'react-router-dom';
import Daseborad from './Containers/Daseborad/Daseborad';
import Doctor from './Containers/Doctor/Doctor';
import Medicine from './Containers/Medicine/Medicine';
import Patients from './Containers/Patients/Patients';
import Layout from './Components/Layout/Layout';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import User from './Containers/User/User';
import LoginUser from './Containers/LoginUser/LoginUser';


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
            <Route path="/user" component={User} />
            <Route path="/login" component={LoginUser} />
        </Switch>
      </Layout>
      </Provider>
    </>
  );
}

export default App;
