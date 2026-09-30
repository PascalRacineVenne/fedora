import { css } from '@linaria/core';
import { Flex, Typography } from 'antd';
import { navLink } from '../styles/navLink';

const styles = {
  list: css`
    li {
      padding-right: 4.125rem;
    }
  `,
};

const Menu = () => {
  return (
    <nav>
      <Flex component='ul' justify='flex-start' align='center' className={styles.list}>
        <li>
          <Typography.Link className={navLink} href='/#'>
            Shop
          </Typography.Link>
        </li>
        <li>
          <Typography.Link className={navLink} href='/#'>
            About
          </Typography.Link>
        </li>
        <li>
          <Typography.Link className={navLink} href='/#'>
            Lookbook
          </Typography.Link>
        </li>
      </Flex>
    </nav>
  );
};

export default Menu;
