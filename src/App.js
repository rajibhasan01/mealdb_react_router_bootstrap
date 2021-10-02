import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Meals from './components/Meals/Meals';
import SingleMeal from './components/SingleMeal/SingleMeal';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/meals">
            <Meals></Meals>
          </Route>

          <Route path="/meal/:mealId">
            <SingleMeal></SingleMeal>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
