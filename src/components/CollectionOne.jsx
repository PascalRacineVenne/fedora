import Button from './Button';
const CollectionOne = () => {
  return (
    <div className='collection'>
      <div className='coll-title'>
        <h3>FOR YOUR ESSENTIAL STYLE</h3>
      </div>
      <div className='coll-display'>
        <img src='' alt='style' />
        <img src='' alt='style' />
        <img src='' alt='style' />
        <div className='coll-description'>
          <h5>Never Before Freedom To Choose</h5>
          <p>
            Beyond The Frame Of Uniforms In The New Normal Era. Wear Your Own
            Appearance And Will, No Matter What The Situation Or The Difficulty.
          </p>
          <Button name={'Shop Now'} />
        </div>
      </div>
    </div>
  );
};

export default CollectionOne;
