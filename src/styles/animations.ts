import { css } from '@linaria/core';

export const animations = {
  fadeIn: css`
    opacity: 0;
    transition: var(--transition-3);
  `,
  fadeInAppear: css`
    opacity: 1;
  `,
  fromLeft: css`
    transform: translateX(-50%);
    transition: var(--transition-3);
  `,
  fromLeftAppear: css`
    transform: translateX(0);
  `,
};
