import { css } from '@linaria/core';
import { Flex, Typography } from 'antd';
import { navLink } from '../styles/navLink';

const styles = {
  list: css`
    li {
      padding-left: 3.25rem;
    }
  `,
};

const UserMenu = () => {
  return (
    <nav>
      <Flex component='ul' justify='flex-end' className={styles.list}>
        <li>
          <Typography.Link className={navLink} href='/#' aria-label='account'>
            My Account
          </Typography.Link>
        </li>
        <li>
          <Typography.Link className={navLink} href='/#' aria-label='cart'>
            Cart (0)
          </Typography.Link>
        </li>
      </Flex>
    </nav>
  );
};

export default UserMenu;
