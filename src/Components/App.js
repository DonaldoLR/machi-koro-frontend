import './app.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import CardContainer from './CardContainer/CardContainer';
import NewCardForm from './NewCardForm/NewCardForm';
import EditCardForm from './EditCardForm/EditCardForm';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <CardContainer />
          </Route>
          <Route path='/newCard'>
            <NewCardForm />
          </Route>
          <Route path='/cards/:id'>
            <EditCardForm />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
