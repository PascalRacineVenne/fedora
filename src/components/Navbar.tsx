import { css } from '@linaria/core';
import { Flex, Typography } from 'antd';
import Menu from './Menu';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';
import { mobile } from '../styles/media';

const styles = {
  navbar: css`
    width: 100vw;
    padding: 2rem 1.125rem;
    font-family: var(--font-regular);

    ${mobile} {
      padding: 1rem 1.125rem;
      align-items: center;
    }
  `,
  left: css`
    width: 30%;
    padding: 4px;

    ${mobile} {
      display: none;
    }
  `,
  right: css`
    width: 30%;

    ${mobile} {
      display: none;
    }
  `,
  title: css`
    font-family: 'Oi-regular';
    font-size: var(--text-size-large);
  `,
};

const Navbar = () => {
  return (
    <Flex>
      <Flex justify='space-between' className={styles.navbar}>
        <div className={styles.left}>
          <Menu />
        </div>
        <Typography.Text className={styles.title}>fedora</Typography.Text>
        <div className={styles.right}>
          <UserMenu />
        </div>
      </Flex>
      <MobileMenu />
    </Flex>
  );
};

export default Navbar;
