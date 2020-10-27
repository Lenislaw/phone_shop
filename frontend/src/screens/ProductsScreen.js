import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import Spinner from "../components/Spinner";
import { PRODUCT_DETAILS_RESET } from "../constants/productConstants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "3rem 0",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Products = ({ match, history }) => {
  const classes = useStyles();

  const keyword = match.params.keyword;
  const brand = match.params.brand;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  if (pageNumber > pages) {
    history.push("/");
  }

  useEffect(() => {
    dispatch({ type: PRODUCT_DETAILS_RESET });
    dispatch(listProducts(keyword, pageNumber, brand));
  }, [dispatch, keyword, pageNumber, brand]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1>Our Products are the best</h1>
          <Grid container className={classes.root} spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} lg={3} md={4} sm={6} key={product._id}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>

          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
            brand={brand}
          />
        </>
      )}
    </>
  );
};

export default Products;
