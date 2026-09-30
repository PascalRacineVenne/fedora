import { css, cx } from '@linaria/core';
import { Flex, Layout, Typography } from 'antd';
import { mobile } from '../styles/media';
import { underlineOnHover } from '../styles/mixins';

const styles = {
  footer: css`
    margin-top: 5rem;

    ${mobile} {
      margin-top: 1rem;
    }
  `,
  top: css`
    padding: 2rem 1rem;

    ${mobile} {
      padding: 1rem 1rem;
    }
  `,
  topList: css`
    ${mobile} {
      flex-direction: column;
      gap: 1rem;
    }
  `,
  nav: css`
    font-family: var(--font-regular);
    font-size: var(--text-size-big);
    color: var(--gray);
    transition: var(--transition-1);

    &:hover {
      transform: scale(1.15, 1.15);
    }

    ${underlineOnHover('var(--gray)')}
  `,
  navActive: css`
    color: var(--dark-grey);
  `,
  bottom: css`
    border-top: 1px solid var(--gray);
    padding: 1.125rem 1rem;
    color: var(--gray);

    ${mobile} {
      flex-direction: column-reverse;
      border-top: none;
      padding: 1.125rem 0;
    }
  `,
  left: css`
    ${mobile} {
      padding-top: 1rem;
      border-top: 1px solid var(--gray);
      justify-content: center;
    }
  `,
  title: css`
    font-family: 'Oi-regular';
    font-size: var(--text-size-large);
  `,
  social: css`
    &:hover {
      color: var(--dark-grey);
    }
  `,
  socialList: css`
    font-size: var(--text-size-small);
    transition: var(--transition-3);

    ${mobile} {
      padding: 1rem;
    }
  `,
};

const navItems = ['LOOKBOOK', 'ARTICLES', 'CONTACT', 'CAREER', 'ABOUT FEDORA'];
const socialItems = ['Facebook', 'Instagram', 'Twitter', 'Youtube'];

const Footer = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <div className={styles.top}>
        <Flex component='ul' justify='space-between' className={styles.topList}>
          {navItems.map((item, index) => (
            <li
              key={item}
              className={cx(styles.nav, index === 0 && styles.navActive)}
            >
              <Typography.Link href='/#'>{item}</Typography.Link>
            </li>
          ))}
        </Flex>
      </div>
      <Flex justify='space-between' className={styles.bottom}>
        <Flex className={styles.left}>
          <Typography.Paragraph className={styles.title}>fedora</Typography.Paragraph>
        </Flex>
        <div>
          <Flex component='ul' justify='space-between' gap='2rem' className={styles.socialList}>
            {socialItems.map((item) => (
              <li key={item}>
                <Typography.Link href='/#' className={styles.social}>
                  {item}
                </Typography.Link>
              </li>
            ))}
          </Flex>
        </div>
      </Flex>
    </Layout.Footer>
  );
};

export default Footer;
