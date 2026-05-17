import React from 'react';
import { classNames } from '../../utils/helpers';
import styles from './Badge.module.css';

const Badge = ({ children, className }) => {
  return (
    <span className={classNames(styles.badge, className)}>
      {children}
    </span>
  );
};

export default Badge;
