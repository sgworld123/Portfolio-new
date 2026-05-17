import React from 'react';
import { classNames } from '../../utils/helpers';
import styles from './Card.module.css';

const Card = ({ children, className, ...props }) => {
  return (
    <div className={classNames(styles.card, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
