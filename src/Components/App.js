import '../Styles/main.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
