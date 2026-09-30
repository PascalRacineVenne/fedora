import { css, cx } from '@linaria/core';
import { Flex, Typography } from 'antd';
import { mobile } from '../styles/media';
import Button from './Button';

const styles = {
  latest: css`
    margin: 0 1rem 3rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('../assets/images/taylor-brandon-d-HOgxTgtZY-unsplash.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 94vh;
    position: relative;

    ${mobile} {
      margin: 0;
      height: 50vh;
    }
  `,
  text: css`
    position: absolute;
    height: 100%;
    width: 100%;
    padding-left: 8rem;
    color: var(--white);
    font-family: var(--font-bold);
    letter-spacing: 6px;
    font-size: var(--text-title-huge);

    ${mobile} {
      padding-left: 1rem;
    }
  `,
  title: css`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1rem;

    ${mobile} {
      font-size: clamp(2.5rem, 5vh, var(--text-title-huge));
    }
  `,
  borderText: css`
    font-weight: lighter;
    -webkit-text-stroke: 2px var(--white);
    -webkit-text-fill-color: transparent;
  `,
};

const LatestBanner = () => {
  return (
    <div className={styles.latest}>
      <Flex vertical align='flex-start' justify='center' className={styles.text}>
        <Typography.Title level={2} className={styles.title}>
          LATEST
        </Typography.Title>
        <Typography.Title level={2} className={cx(styles.title, styles.borderText)}>
          COLLECTION
        </Typography.Title>
        <Button name={'Shop Now'} />
      </Flex>
    </div>
  );
};

export default LatestBanner;
