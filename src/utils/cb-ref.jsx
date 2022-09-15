import { useState } from 'react';
import useIntersectionObserver from './hooks';

const Component = () => {
  const [hidden, setHidden] = useState(false);

  const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px -100px 0px',
  };

  let callback = (entries) => {
    entries.forEach((entry) => {
      setHidden(!entry.isIntersect);
    });
  };

  const cbRef = useIntersectionObserver(appearOptions, callback);
  return (
    <div>
      <div ref={cbRef} />
      {hidden && <div>its hidden</div>}
    </div>
  );
};

export default Component;
