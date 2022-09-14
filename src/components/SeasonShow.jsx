import CarouselCollection from './CarouselCollection';
const SeasonShow = () => {
  return (
    <div className='season-show'>
      <div className='season-header'>
        <h2>SPRING SUMMER 2022 SHOW</h2>
        <div className='hor-scroll'>
          <div className='scroll active'></div>
          <div className='scroll'></div>
          <div className='scroll'></div>
        </div>
      </div>
      <CarouselCollection />
    </div>
  );
};

export default SeasonShow;
