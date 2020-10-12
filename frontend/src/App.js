import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import "./App.css";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import SalesProductsScreen from "./screens/SalesProductsScreen";

const App = () => {
  return (
    <Router>
     <Header />
    <main className="App">
    <Container maxWidth="lg">
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/sales' component={SalesProductsScreen} exact/>
   </Container>
 </main>
    </Router>
    
     
      
    
  );
}

export default App;
