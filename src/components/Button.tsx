import { css, cx } from '@linaria/core';
import { Button as AntButton } from 'antd';
import { mobile } from '../styles/media';

const styles = {
  btn: css`
    display: inline;
    height: auto;
    padding: 1.25rem 7rem;
    border: none;
    border-radius: 0;
    background-color: var(--white);
    color: var(--dark-grey);
    text-align: center;
    font-family: var(--font-regular);
    font-size: var(--text-size-medium);
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    white-space: normal;

    ${mobile} {
      padding: 1.25rem 4rem;
    }
  `,
  draw: css`
    box-shadow: inset 0 0 0 4px var(--dark-grey);
    color: var(--dark-grey);
    transition: color 0.25s calc(0.25s / 3);
    position: relative;

    &::before,
    &::after {
      border: 0 solid transparent;
      box-sizing: border-box;
      content: '';
      pointer-events: none;
      position: absolute;
      width: 0;
      height: 0;
      bottom: 0;
      right: 0;
    }

    &::before {
      border-bottom-width: 4px;
      border-left-width: 4px;
    }

    &::after {
      border-top-width: 4px;
      border-right-width: 4px;
    }

    &:hover {
      color: var(--dark-blue);
      background-color: var(--white);
      box-shadow: inset 0 0 0 4px var(--dark-grey);

      &::before,
      &::after {
        border-color: var(--dark-blue);
        transition: border-color 0s, width 0.25s, height 0.25s;
        width: 100%;
        height: 100%;
      }

      &::before {
        transition-delay: 0s, 0s, 0.25s;
      }

      &::after {
        transition-delay: 0s, 0.25s, 0s;
      }
    }
  `,
};

type ButtonProps = {
  name: string;
  draw?: boolean;
};

const Button = ({ name, draw }: ButtonProps) => {
  return (
    <div>
      <AntButton
        type='text'
        href='/#'
        aria-label='shop now'
        className={cx(styles.btn, draw && styles.draw)}
      >
        {name}
      </AntButton>
    </div>
  );
};

export default Button;
