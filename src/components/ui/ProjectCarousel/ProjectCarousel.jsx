// ProjectCarousel.jsx
import { useState, useEffect, useRef } from "react";
import styles from "./ProjectCarousel.module.css"; // or your existing module

const ProjectCarousel = ({ images = [], title = "" ,className = ""}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (images.length > 1) startAutoPlay();
    return () => stopAutoPlay(); // cleanup on unmount
  }, [images.length]);

  const goTo = (index, e) => {
    e.stopPropagation(); // prevent card onClick from firing
    setCurrentIndex(index);
    stopAutoPlay();
    startAutoPlay(); // restart timer from this slide
  };

  if (!images?.length) return null;

  return (
    <div
      className={`${styles.carousel} ${className}`}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className={styles.imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
              onClick={(e) => goTo(i, e)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;