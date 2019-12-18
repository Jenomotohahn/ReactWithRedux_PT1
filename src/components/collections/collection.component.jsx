import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const Collection = ({ collection }) => (
  <div className="collection">
    {collection.map(item => (
      <div key={item.id}>{item.item}</div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collection: selectCollections
});

export default connect(mapStateToProps)(Collection);
