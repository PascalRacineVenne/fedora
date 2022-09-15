const Button = ({ name, draw }) => {
  return (
    <div className={`btn ${draw}`}>
      <a href='/#' alt='shop now'>
        {name}
      </a>
    </div>
  );
};

export default Button;
