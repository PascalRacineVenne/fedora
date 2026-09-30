import { css } from '@linaria/core';
import { Layout } from 'antd';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CollectionOne from './components/CollectionOne';
import CarouselHeader from './components/CarouselHeader';
import CarouselCard from './components/CarouselCard';
import SeasonShow from './components/SeasonShow';
import LatestBanner from './components/LatestBanner';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';

const styles = {
  header: css`
    height: auto;
    line-height: inherit;
    padding: 0;
    color: inherit;
    background: transparent;
  `,
};

function App() {
  return (
    <Layout>
      <Layout.Header className={styles.header}>
        <Navbar />
      </Layout.Header>
      <Layout.Content>
        <Banner />
        <CollectionOne />
        <CarouselHeader />
        <CarouselCard />
        <SeasonShow />
        <LatestBanner />
        <CarouselCard />
        <SocialBanner />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
