import "./App.css";
import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./layout/NavBar";
import Container from "react-bootstrap/Container";
import BlogPost from "./pages/BlogPost";
import BlogContent from "./pages/BlogContent";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import NewBlog from "./pages/NewBlog";

function App() {
  return (
    <react.Fragment>
      <NavBar></NavBar>
      <Container className="mt-5 text-wrap break-word">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/locations" exact>
              <Locations />
            </Route>
            <Route path="/travel" exact>
              <BlogPost />
            </Route>
            <Route path="/blog" exact>
              <BlogContent />
            </Route>
            <Route path="/new" exact>
              <NewBlog />
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </react.Fragment>
  );
}

export default App;
