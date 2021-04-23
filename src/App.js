
import './App.css';
import {Route, Switch} from 'react-router-dom'; 
import Register from './components/Register';
import Account from './components/Account'; 
import Konto from './components/Konto'; 


function App() {
  return (
    <section>

        <Switch>
        <Route path="/" component={Register} exact />
        <Route path="/account" component={Account} />
        <Route path="/konto" component={Konto} />
        </Switch>

    </section>
  );
}

export default App;
