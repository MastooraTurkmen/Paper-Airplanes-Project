import { useState, useEffect } from 'react';
import arrowUpIcon from '/icons/arrowUp.svg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the scroll button visiblity
  const toggleVisibility = (e) => {
    e.preventDefault()
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of the website
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // Handle scroll event
  useEffect(() => {
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="z-[999]">
      {isVisible && (
        <img
          src={arrowUpIcon}
          className="w-10 cursor-pointer animate-bounce h-10 fixed bottom-4 right-4"
          onClick={scrollToTop}
          alt="Scroll to top"
        />
      )}
    </div>
  );
};

export default ScrollToTop;
