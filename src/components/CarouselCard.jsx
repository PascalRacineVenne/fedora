import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from './Button';
import Card from './Card';

const CarouselCard = () => {
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
    <div className='carousel-container'>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=''
        containerClass='container-with-dots'
        dotListClass=''
        // draggable
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass=''
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
        showDots={true}
        sliderClass=''
        slidesToSlide={1}
        // swipeable
        swipeable={false}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
      <div className='btn-center'>
        <Button name={'See All'} draw={'draw-border'} />
      </div>
    </div>
  );
  // return (
  //   <div className='carousel-container'>
  //     <div className='carousel'>

  //     </div>
  // <div className='btn-center'>
  //   <Button name={'See All'} draw={'draw-border'} />
  // </div>;
  //   </div>
  // );
};

export default CarouselCard;
