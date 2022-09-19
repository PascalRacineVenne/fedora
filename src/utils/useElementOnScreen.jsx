import { useRef, useState, useEffect } from 'react';

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentContainerRef = containerRef.current;
    if (currentContainerRef) observer.observe(currentContainerRef);

    return () => {
      if (currentContainerRef) observer.unobserve(currentContainerRef);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
