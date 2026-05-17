import React from 'react';
import { classNames } from '../../utils/helpers';
import styles from './Button.module.css';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <button className={classNames(styles.btn, styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
