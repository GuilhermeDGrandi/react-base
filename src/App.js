import React from "react";
import {Router} from 'react-router-dom'

import history from "./services/history.js";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/index.js";
import Routes from "./routes/index.js";

function App() {
  return (
    <Router history={history} >
    <Header></Header>
    <Routes/>
    <GlobalStyles/>
  </Router>
)
}

export default App;
