import React from "react";
import About from "./Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./Pages/Features";
import Layout from "./component/Layout";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";

import More from "./Pages/More";
import MyForm from "./Pages/MyForm";
import Home from "./component/Home";

const App = () => {
  return (
    <Router>
      {/*route for the list*/}
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/more" exact element={<More />} />
          <Route path="/myform" exact element={<MyForm />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/features" exact element={<Features />} />
          <Route path="/work" exact element={<Work />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
