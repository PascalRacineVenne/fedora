import useElementOnScreen from '../utils/useElementOnScreen';

const CarouselCollection = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
    // rootMargin: '0px 0px -100px 0px',
  });

  return (
    <div className='season-carousel' ref={containerRef}>
      <img
        className={isVisible ? 'essential fade-in appear' : 'essential fade-in'}
        src='/images/manny-moreno-pidhWc7zHjA-unsplash.jpg'
        alt='collection'
      />
      <img
        className={isVisible ? 'essential fade-in appear' : 'essential fade-in'}
        src='/images/josue-ladoo-pelegrin-s4UjZQYKjjc-unsplash.jpg'
        alt='collection'
      />
      <img
        className={isVisible ? 'essential fade-in appear' : 'essential fade-in'}
        src='/images/lino-ogenio-JP50-TUoRIA-unsplash.jpg'
        alt='collection'
      />
      <img
        className={isVisible ? 'essential fade-in appear' : 'essential fade-in'}
        src='/images/josue-ladoo-pelegrin-s4UjZQYKjjc-unsplash.jpg'
        alt='collection'
      />
    </div>
  );
};

export default CarouselCollection;
