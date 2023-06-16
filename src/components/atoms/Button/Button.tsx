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
  sm: css`
    padding: 0.5rem 1rem;
  `,
  md: css`
    padding: 0.5rem 1.5rem;
  `,
  lg: css`
    padding: 0.75rem 2rem;
  `,
};

const style = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  border: 'lightgray',
  borderRadius: '0.375rem',
  fontWeight: '500',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', variant = 'primary', size = 'sm', ...props }, ref) => {
    // debug
    console.log(variant);
    console.log(size);

    return (
      <button ref={ref} type={type} css={[style, variants[variant], sizes[size]]}>
        <span>{props.children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
