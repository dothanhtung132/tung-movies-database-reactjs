import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route><div className="page-not-found"><h2>404 not found!</h2></div></Route>
      </Switch>
    </div>
  );
}

export default App;
