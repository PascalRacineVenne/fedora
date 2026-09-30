import { useRef, useState, useEffect } from 'react';

const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
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

  return [containerRef, isVisible] as const;
};

export default useElementOnScreen;
