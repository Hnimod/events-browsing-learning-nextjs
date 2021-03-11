import React, { ReactNode } from 'react';

import classes from './error-alert.module.css';

type Props = {
  children: ReactNode;
};

function ErrorAlert({ children }: Props) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
