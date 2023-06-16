/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const variants = {
  primary: css`
    background-color: rgb(37 99 235);
    color: white;
  `,
  inverse: css`
    background-color: white;
    color: rgb(37, 99 235);
  `,
  danger: css`
    background-color: rgb(220 38 38);
    color: white;
  `,
};

const sizes = {
  xs: css`
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  sm: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
  md: css`
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
  `,
  lg: css`
    padding: 0.75rem 2rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
  `,
};

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: lightgray;
  border-radius: 0.375rem;
  font-weight: 500;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', variant = 'primary', size = 'sm', ...props }, ref) => {
    return (
      <button ref={ref} type={type} css={[style, variants[variant], sizes[size]]}>
        <span>{props.children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
