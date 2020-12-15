import React from 'react';
import classes from './ErrorMassage.module.css';

function ErrorMassage() {
  return (
    <div className={classes.errorMassage}>{`Is already in contacts.`}</div>
  );
}

export default ErrorMassage;
