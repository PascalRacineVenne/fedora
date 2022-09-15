const CarouselHeader = () => {
  return (
    <div className='carousel-container'>
      <div className='car-header'>
        <ul>
          <li>
            <a className='active' href='/#'>
              New Arrivals
            </a>
          </li>
          <li>
            <a href='/#'>Bestsellers</a>
          </li>
          <li>
            <a href='/#'>Exclusive</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarouselHeader;
