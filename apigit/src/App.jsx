import Home from "./Components/Home";
import Details from "./Components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Style/App.css";
import ApigitProvider from "./Contex/ApigitProvider.js";

function App() {
  return (
    <ApigitProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/detalle">
              <Details />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApigitProvider>
  );
}

export default App;
