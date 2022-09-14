import Button from './Button';

const LatestBanner = () => {
  return (
    <div className='latest-banner'>
      <div className='banner-text'>
        <h3>LATEST</h3>
        <h3 className='border-text'>COLLECTION</h3>
        <div className='btn-white'>
          <Button name={'Shop Now'} />
        </div>
      </div>
    </div>
  );
};

export default LatestBanner;
