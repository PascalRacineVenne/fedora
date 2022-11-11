import './scss/main.scss';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CollectionOne from './components/CollectionOne';
import CarouselHeader from './components/CarouselHeader';
import CarouselCard from './components/CarouselCard';
import SeasonShow from './components/SeasonShow';
import LatestBanner from './components/LatestBanner';
import SocialBanner from './components/SocialBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Banner />
      <CollectionOne />
      <CarouselHeader />
      <CarouselCard />
      <SeasonShow />
      <LatestBanner />
      <CarouselCard />
      <SocialBanner />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
