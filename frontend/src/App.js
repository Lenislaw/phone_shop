import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./App.css";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ContactScreen from "./screens/ContactScreen";
import SalesProductsScreen from "./screens/SalesProductsScreen";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg">
        <main className="App">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/sales" component={SalesProductsScreen} exact />
          <Route path="/contact" component={ContactScreen} exact />
          <Route path="/products" component={ProductsScreen} exact />
          <Route path="/page/:pageNumber" component={ProductsScreen} exact />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
