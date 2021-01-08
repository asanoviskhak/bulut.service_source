import React from "react"; 
import { Switch, Route, HashRouter} from "react-router-dom";
import Main from 'pages/main';
// import Works from 'pages/works';
import About from 'pages/about'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Contact from 'pages/contact';
export default function App(){  
    return (
      <>
        <HashRouter>
          <Header/>
          <Switch>
            <Route exact path="/"><Main/></Route>
            <Route path="/about"><About/></Route>
            {/* <Route path="/works"> <Works/> </Route> */}
            <Route path="/contact"><Contact/></Route>
          </Switch>
          <Footer/>
        </HashRouter>
      </>
    );
  }
