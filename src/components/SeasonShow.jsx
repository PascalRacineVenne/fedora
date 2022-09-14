import CarouselCollection from './CarouselCollection';
const SeasonShow = () => {
  return (
    <div className='season-show'>
      <div className='season-header'>
        <h3>SPRING SUMMER 2022 SHOW</h3>
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
