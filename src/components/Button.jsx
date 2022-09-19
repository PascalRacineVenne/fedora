const Button = ({ name, draw, btnStyle }) => {
  return (
    <div>
      <a
        className={`btn ${draw ? draw : ''} btnStyle`}
        href='/#'
        alt='shop now'
      >
        {name}
      </a>
    </div>
  );
};

export default Button;
