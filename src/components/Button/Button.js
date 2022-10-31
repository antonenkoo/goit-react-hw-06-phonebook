// import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ type = 'button', children, ...otherProps }) => {
  return (
    <button className={css.btn} type={type} {...otherProps}>
      {children}
    </button>
  );
};
