import React from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";
import { Container } from "reactstrap";

function index(props) {
  return (
    <Container>
      <TableItem />
    </Container>
  );
}

index.propTypes = {};

export default index;
