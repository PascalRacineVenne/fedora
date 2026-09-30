export const underlineOnHover = (color: string) => `
  &::after {
    background: ${color};
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`;
