import { css } from '@linaria/core';
import { underlineOnHover } from './mixins';

export const navLink = css`
  display: inline-block;
  position: relative;
  font-size: var(--text-size-medium);
  transition: var(--transition-1);

  &:hover {
    transform: scale(1.05, 1.05);
  }

  ${underlineOnHover('var(--dark-grey)')}
`;
