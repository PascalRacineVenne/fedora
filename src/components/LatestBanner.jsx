import Button from './Button';

const LatestBanner = () => {
  return (
    <div className='latest-banner'>
      <div className='banner-text'>
        <h3>LATEST</h3>
        <h3 className='border-text'>COLLECTION</h3>
        <Button name={'Shop Now'} btnStyle={'btn-white'} />
      </div>
    </div>
  );
};

export default LatestBanner;
