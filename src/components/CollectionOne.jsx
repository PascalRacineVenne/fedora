import Button from './Button';
import useElementOnScreen from '../utils/useElementOnScreen';

import ImageOne from '../assets/images/jasmin-chew-IvqEWtgttXI-unsplash.jpg';
import ImageTwo from '../assets/images/michael-c-zVycYmcblDY-unsplash.jpg';
import ImageThree from '../assets/images/rayul-_M6gy9oHgII-unsplash.jpg';

const CollectionOne = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });
  const [containerRef2, isVisible2] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className='collection'>
      <div className='coll-title' ref={containerRef2}>
        <h3 className={isVisible2 ? 'from-left appear' : 'from-left'}>
          FOR YOUR ESSENTIAL STYLE
        </h3>
      </div>
      <div className='coll-display' ref={containerRef}>
        <img
          className={
            isVisible ? 'essential fade-in appear' : 'essential fade-in'
          }
          src={ImageOne}
          alt='style'
        />
        <img
          className={
            isVisible ? 'essential fade-in appear' : 'essential fade-in'
          }
          src={ImageTwo}
          alt='style'
        />
        <img
          className={
            isVisible ? 'essential fade-in appear' : 'essential fade-in'
          }
          src={ImageThree}
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
