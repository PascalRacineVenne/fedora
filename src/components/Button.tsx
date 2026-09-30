type ButtonProps = {
  name: string;
  draw?: string;
  btnStyle?: string;
};

const Button = ({ name, draw }: ButtonProps) => {
  return (
    <div>
      <a
        className={`btn ${draw ? draw : ''} btnStyle`}
        href='/#'
        aria-label='shop now'
      >
        {name}
      </a>
    </div>
  );
};

export default Button;
