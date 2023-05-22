import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
