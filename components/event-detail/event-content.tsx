import React, { ReactNode } from 'react';
import classes from './event-content.module.css';

type Props = {
  children: ReactNode;
};

function EventContent({ children }: Props) {
  return <section className={classes.content}>{children}</section>;
}

export default EventContent;
