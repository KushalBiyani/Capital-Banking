import {Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import CustDetails from './containers/customerDetails';
import Transfer from './containers/transfer';
import History from './containers/history';
import SelectUser from './containers/selectUser';
import SuccessPage from './containers/successPage';
import ErrorPage from './containers/error';

function App() {
  return (
    <main>
             <Switch>                      
            <Route path="/" exact component={Home} />
            <Route path="/customerDetails" exact component={CustDetails} />
            <Route path="/selectUser" exact component={SelectUser} />
            <Route path="/transact/:id" exact component={Transfer} />
            <Route path="/history" exact component={History} />
            <Route path="/success" exact component={SuccessPage} />
            <Route path="/error" exact component={ErrorPage} />
            </Switch>
        </main> 
  );
}

export default App;
