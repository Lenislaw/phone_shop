import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "", brand }) => {
  return (
    pages > 1 && (
      <Pagination className="pagination">
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            className="pagination-linkContainer"
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : brand
                  ? `/products/brand/${brand}/page/${x + 1}`
                  : `/products/page/${x + 1}`
                : `/admin/products/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
