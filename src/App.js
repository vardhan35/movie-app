import "./App.css";
import Movielist from "./components/Movielist";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopMovies from "./components/TopMovies";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Movielist />
          </Route>
          <Route path="/details">
            <MovieDetails />
          </Route>
          <Route path="/top">
            <TopMovies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
