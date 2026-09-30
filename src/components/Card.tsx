import { css } from '@linaria/core';
import { Flex, Typography } from 'antd';
import { mobile } from '../styles/media';
import cardExample from '../assets/images/nico-marks-7cvNasUbA_w-unsplash.jpg';

const styles = {
  card: css`
    width: 90%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

    ${mobile} {
      width: 100%;
    }
  `,
  img: css`
    width: 100%;
    height: 460px;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    margin-bottom: 1rem;
  `,
  sku: css`
    font-size: var(--text-size-tiny);
    text-transform: uppercase;
    padding-left: 0.5rem;
  `,
  desc: css`
    font-family: var(--font-bold);
    font-size: var(--text-size-small);
    padding: 1rem 0.5rem;
  `,
};

const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.img} src={cardExample} alt='card' />
      </div>
      <Typography.Paragraph className={styles.sku}>1A9UI1</Typography.Paragraph>
      <Flex justify='space-between' className={styles.desc}>
        <Typography.Text>Leather Fedora</Typography.Text>
        <div>$118</div>
      </Flex>
    </div>
  );
};

export default Card;
