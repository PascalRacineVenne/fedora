import { useState } from 'react';
import { css, cx } from '@linaria/core';
import { Typography } from 'antd';
import Arrow from '../assets/icons/arrow.svg';
import BurgerMenu from './BurgerMenu';
import { mobile } from '../styles/media';

const styles = {
  wrapper: css`
    padding: 1rem;
  `,
  panel: css`
    display: none;
    position: fixed;
    z-index: 1;
    background: var(--light-gray);
    right: 0;
    top: 0;
    height: 100vh;
    width: 50%;
    max-width: 500px;
    transform: translateX(100%);
    transition: transform 0.3s;
    font-family: var(--font-primary);
    padding: 1rem;

    ${mobile} {
      display: block;
    }
  `,
  panelOpen: css`
    transform: translateX(0%);
  `,
  options: css`
    display: grid;
    height: 100%;
    place-items: center;
    text-align: center;

    li {
      padding: 1rem 0;
    }
  `,
  actions: css`
    border-bottom: 1px solid var(--gray);
  `,
};

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBackClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.wrapper}>
      <BurgerMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className={cx(styles.panel, menuOpen && styles.panelOpen)}>
        <nav>
          <img src={Arrow} alt='arrow' onClick={handleBackClick} />
          <div className={styles.options}>
            <div className={styles.actions}>
              <ul>
                <li>
                  <Typography.Link href='/#'>Shop</Typography.Link>
                </li>
                <li>
                  <Typography.Link href='/#'>About</Typography.Link>
                </li>
                <li>
                  <Typography.Link href='/#'>Lookbook</Typography.Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Typography.Link href='/#' aria-label='account'>
                    My Account
                  </Typography.Link>
                </li>
                <li>
                  <Typography.Link href='/#' aria-label='cart'>
                    Cart (0)
                  </Typography.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
