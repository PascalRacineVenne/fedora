const Card = ({ imgSrc, sku, name, price }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src='/images/nico-marks-7cvNasUbA_w-unsplash.jpg' alt='card' />
      </div>
      <p className='card-sku'>1A9UI1</p>
      <div className='card-desc'>
        <p className='name'>Leather Fedora</p>
        <div className='price'>$118</div>
      </div>
    </div>
  );
};

export default Card;
