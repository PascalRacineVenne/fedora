import Button from './Button';
const CollectionOne = () => {
  return (
    <div className='collection'>
      <div className='coll-title'>
        <h3>FOR YOUR ESSENTIAL STYLE</h3>
      </div>
      <div className='coll-display'>
        <img
          className='essential fade-in'
          src='/images/jasmin-chew-IvqEWtgttXI-unsplash.jpg'
          alt='style'
        />
        <img
          className='essential fade-in'
          src='/images/michael-c-zVycYmcblDY-unsplash.jpg'
          alt='style'
        />
        <img
          className='essential fade-in'
          src='/images/rayul-_M6gy9oHgII-unsplash.jpg'
          alt='style'
        />
        <div className='coll-description'>
          <h3>Never Before Freedom To Choose</h3>
          <p>
            Beyond The Frame Of Uniforms In The New Normal Era. Wear Your Own
            Appearance And Will, No Matter What The Situation Or The Difficulty.
          </p>
          <Button name={'Shop Now'} draw={'draw-border'} />
        </div>
      </div>
    </div>
  );
};

export default CollectionOne;
