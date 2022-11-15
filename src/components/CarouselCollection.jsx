import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useElementOnScreen from '../utils/useElementOnScreen';

const CarouselCollection = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
  });

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div ref={containerRef}>
      <Carousel
        className={
          isVisible
            ? 'season-carousel fade-in appear'
            : 'season-carousel fade-in'
        }
        additionalTransfrom={0}
        // arrows
        arrows={false}
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        containerClass='container-with-dots'
        customTransition='all 2s linear'
        dotListClass=''
        draggable={false}
        focusOnSelect={false}
        infinite={true}
        itemClass='summer-img'
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        // showDots

        sliderClass=''
        slidesToSlide={1}
        swipeable={false}
      >
        <img
          src='/images/manny-moreno-pidhWc7zHjA-unsplash.jpg'
          alt='collection'
        />
        <img
          src='/images/josue-ladoo-pelegrin-s4UjZQYKjjc-unsplash.jpg'
          alt='collection'
        />
        <img
          src='/images/lino-ogenio-JP50-TUoRIA-unsplash.jpg'
          alt='collection'
        />
        <img
          src='/images/cassie-matias-GbiBqMnj6ds-unsplash.jpg'
          alt='collection'
        />
        <img
          src='/images/illiya-vjestica-qaCCuGcbJQU-unsplash.jpg'
          alt='collection'
        />
        <img
          src='/images/allef-vinicius-nMLjDDElgCw-unsplash.jpg'
          alt='collection'
        />
      </Carousel>
    </div>
  );
};

export default CarouselCollection;
