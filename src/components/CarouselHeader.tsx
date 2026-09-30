import { css, cx } from '@linaria/core';
import { Flex, Typography } from 'antd';
import { mobile } from '../styles/media';
import { underlineOnHover } from '../styles/mixins';

const styles = {
  container: css`
    margin: 1.5rem 1rem;
  `,
  header: css`
    padding: 0 200px 2rem;

    ${mobile} {
      padding: 0 0 1rem;
      overflow-x: auto;
    }
  `,
  list: css`
    ${mobile} {
      justify-content: flex-start;
      width: max-content;
    }
  `,
  link: css`
    font-family: var(--font-regular);
    font-size: var(--text-size-big);
    color: var(--gray);
    display: inline-block;
    position: relative;
    transition: var(--transition-1);

    ${mobile} {
      font-size: clamp(1rem, 3vh, var(--text-size-big));
      width: 100%;
      padding: 0 12px;
    }

    &:hover {
      transform: scale(1.15, 1.15);
    }

    ${underlineOnHover('var(--gray)')}
  `,
  active: css`
    color: var(--dark-grey);
  `,
};

const CarouselHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Flex component='ul' justify='space-around' className={styles.list}>
          <li>
            <Typography.Link className={cx(styles.link, styles.active)} href='/'>
              New Arrivals
            </Typography.Link>
          </li>
          <li>
            <Typography.Link className={styles.link} href='/'>
              Bestsellers
            </Typography.Link>
          </li>
          <li>
            <Typography.Link className={styles.link} href='/'>
              Exclusive
            </Typography.Link>
          </li>
        </Flex>
      </div>
    </div>
  );
};

export default CarouselHeader;
