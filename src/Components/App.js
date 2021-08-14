import '../Styles/main.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import CardContainer from './CardContainer/CardContainer';
import GameInfoContainer from './GameInfoContainer/GameInfoContainer';
import NewCardForm from './NewCardForm/NewCardForm';
import EditCardForm from './EditCardForm/EditCardForm';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />

        <Switch>
          <Route exact path='/'>
            <div>
              {/* <GameInfoContainer /> */}
              <CardContainer />
            </div>
          </Route>
          <Route path='/newCard'>
            <NewCardForm />
          </Route>
          <Route path='/cards/:id'>
            <EditCardForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
