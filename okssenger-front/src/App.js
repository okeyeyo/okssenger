import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout"; // Layout 컴포넌트 불러오기
import Login from "./Login"; // Login 페이지
import About from "./About"; // About 페이지
import Contact from "./Contact"; // Contact 페이지
import "./App.css"; // src/App.css 파일을 import

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
