import Button from './Button';

const LatestBanner = () => {
  return (
    <div className='latest-banner'>
      <div className='banner-text'>
        <h2>LATEST</h2>
        <h2 className='border-text'>COLLECTION</h2>
        <Button name={'Shop Now'} btnStyle={'btn-white'} />
      </div>
    </div>
  );
};

export default LatestBanner;
