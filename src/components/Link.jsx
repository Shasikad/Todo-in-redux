import React from "react";
import { connect } from "react-redux";

const filter = (filter) => ({
  type: "FILTER_TODO",
  filter
});

const Link = ({ active, children, onClick }) => {
  return (
    <button onClick={onClick} disabled={active} style={{ marginLeft: "4px" }}>
      {children}
    </button>
  );
};
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("dispatch " + ownProps.filter);
    dispatch(filter(ownProps.filter));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Link);
