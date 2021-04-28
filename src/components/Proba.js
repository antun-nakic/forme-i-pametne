import React from "react";
import PropTypes from "prop-types";

function Proba(props) {
  return <div></div>;
}

Proba.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

Proba.defaultProps = {
  name: "Stranger",
  id: 1,
};

export default Proba;
