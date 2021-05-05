import {
  BrowserRouter as Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
