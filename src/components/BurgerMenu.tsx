import { css } from '@linaria/core';
import burgerMenu from '../assets/icons/menu.svg';
import { desktop } from '../styles/media';

const styles = {
  button: css`
    width: 28px;
    padding: 0;
    cursor: pointer;

    ${desktop} {
      display: none;
    }
  `,
};

type BurgerMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const BurgerMenu = ({ menuOpen, setMenuOpen }: BurgerMenuProps) => {
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <img
      onClick={handleClick}
      src={burgerMenu}
      alt='burger'
      className={styles.button}
    />
  );
};

export default BurgerMenu;
