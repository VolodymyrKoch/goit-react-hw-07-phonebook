import React from 'react';

import classes from './ErrorMassage.module.css';
// import { connect } from 'react-redux';

function ErrorMassage() {
  return (
    <div className={classes.errorMassage}>{`Is already in contacts.`}</div>
  );
}

// const mapStateToProps = (state, props) => ({
//   erroMasage: state.contacts.erroMasage,
// });
// export default connect(mapStateToProps)(ErrorMassage);
export default ErrorMassage;
