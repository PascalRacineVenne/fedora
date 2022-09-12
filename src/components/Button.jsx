const Button = ({ name }) => {
  return (
    <div className='btn'>
      <a href='/#' alt='shop now'>
        {name}
      </a>
    </div>
  );
};

export default Button;
