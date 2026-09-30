import { css, cx } from '@linaria/core';
import { Flex, Typography } from 'antd';
import { mobile } from '../styles/media';

const styles = {
  hero: css`
    margin: 0 1rem;
    background-image: url('../assets/images/allef-vinicius--eKbU_bOF9g-unsplash.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 90vh;
    position: relative;

    ${mobile} {
      margin: 0;
      height: 80vh;
    }
  `,
  banner: css`
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 2.75rem 3.75rem;
    color: var(--white);

    ${mobile} {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      gap: 8px;
      padding: 0.75rem 1.75rem;
    }
  `,
  left: css`
    font-family: var(--font-bold);
    letter-spacing: 6px;
    font-size: var(--text-title-huge);

    ${mobile} {
      font-size: clamp(2rem, 2.5vh, var(--text-title-huge));
    }
  `,
  title: css`
    font-size: 2em;
    font-weight: 400;
  `,
  borderText: css`
    font-weight: lighter;
    -webkit-text-stroke: 2px var(--white);
    -webkit-text-fill-color: transparent;
  `,
  right: css`
    width: 224px;
    margin-bottom: 1rem;
    margin-right: 2.5rem;
    font-family: var(--font-primary);
    font-size: var(--text-size-big);

    ${mobile} {
      font-size: clamp(1rem, 2vh, var(--text-size-big));
    }
  `,
};

const Banner = () => {
  return (
    <div className={styles.hero}>
      <Flex justify='space-between' align='flex-end' className={styles.banner}>
        <div className={styles.left}>
          <Typography.Title level={1} className={cx(styles.title, styles.borderText)}>
            ON
          </Typography.Title>
          <Typography.Title level={1} className={styles.title}>
            STYLING
          </Typography.Title>
        </div>
        <Flex align='flex-end' className={styles.right}>
          <Typography.Paragraph>
            We Are Here To Outfit The World's Most Ambitious People.
          </Typography.Paragraph>
        </Flex>
      </Flex>
    </div>
  );
};

export default Banner;
