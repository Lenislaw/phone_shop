import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import "./App.css";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ContactScreen from "./screens/ContactScreen";
import SalesProductsScreen from "./screens/SalesProductsScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
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
          <Route path="/products/:keyword" component={ProductsScreen} exact />
          <Route path="/search/:keyword" component={ProductsScreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={ProductsScreen}
            exact
          />
          <Route
            path="/products/brand/:brand"
            component={ProductsScreen}
            exact
          />
          <Route
            path="/products/brand/:brand/page/:pageNumber"
            component={ProductsScreen}
            exact
          />
          <Route
            path="/products/page/:pageNumber"
            component={ProductsScreen}
            exact
          />
          <Route path="/product/:id" component={ProductDetailsScreen} exact />
          <Route path="/user/Login" component={LoginScreen} exact />
          <Route path="/user/Register" component={RegisterScreen} exact />
          <Route path="/notfound" component={NotFoundScreen} exact />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
