import React, { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
import styles from './button.module.css';

type Props = {
  children: ReactNode;
  link?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ children, link, onClick }: Props) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
