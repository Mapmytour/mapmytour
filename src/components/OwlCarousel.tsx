
import React, { useState, useEffect, ReactNode, useRef } from 'react';

interface OwlCarouselProps {
  children: ReactNode[];
  options?: {
    autoplay?: boolean;
    smartSpeed?: number;
    margin?: number;
    dots?: boolean;
    loop?: boolean;
    center?: boolean;
    responsive?: Record<string, { items: number }>;
    autoplayTimeout?: number;
    items?: number;
  };
  className?: string;
}

const OwlCarousel: React.FC<OwlCarouselProps> = ({ 
  children, 
  options = {}, 
  className = '' 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const calculateVisibleItems = () => {
    if (!options.responsive) return options.items || 1;
    
    const width = window.innerWidth;
    let items = 1;
    
    if (options.responsive) {
      const breakpoints = Object.keys(options.responsive)
        .map(Number)
        .sort((a, b) => a - b);
      
      for (const bp of breakpoints) {
        if (width >= bp) {
          items = options.responsive[bp].items;
        } else {
          break;
        }
      }
    }
    
    return items;
  };
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(calculateVisibleItems());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [options.responsive]);
  
  useEffect(() => {
    if (options.autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, options.autoplayTimeout || 5000);
      
      return () => clearInterval(interval);
    }
  }, [activeIndex, options.autoplay, options.autoplayTimeout]);
  
  const nextSlide = () => {
    if (children.length <= visibleItems) return;
    setActiveIndex((prev) => {
      if (options.loop) {
        return (prev + 1) % (children.length - visibleItems + 1);
      }
      return prev < children.length - visibleItems ? prev + 1 : 0;
    });
  };
  
  const prevSlide = () => {
    if (children.length <= visibleItems) return;
    setActiveIndex((prev) => {
      if (options.loop) {
        return prev === 0 ? children.length - visibleItems : prev - 1;
      }
      return prev > 0 ? prev - 1 : children.length - visibleItems;
    });
  };
  
  const itemWidth = 100 / visibleItems;
  
  const renderItems = () => {
    return React.Children.map(children, (child, index) => {
      const isVisible = index >= activeIndex && index < activeIndex + visibleItems;
      
      return (
        <div 
          className="owl-item" 
          style={{
            flex: `0 0 ${itemWidth}%`,
            display: 'block',
            transition: 'transform 0.5s ease',
          }}
        >
          {child}
        </div>
      );
    });
  };

  return (
    <div className={`owl-carousel-container relative ${className}`}>
      <div 
        ref={carouselRef} 
        className="owl-carousel owl-loaded owl-drag"
      >
        <div 
          className="owl-stage-outer overflow-hidden" 
        >
          <div 
            className="owl-stage flex"
            style={{
              transform: `translate3d(-${activeIndex * itemWidth}%, 0px, 0px)`,
              transition: 'all 0.5s ease 0s',
              width: `${(children.length / visibleItems) * 100}%`
            }}
          >
            {renderItems()}
          </div>
        </div>
        
        {options.dots && (
          <div className="owl-dots text-center mt-3">
            {Array.from({ length: children.length - visibleItems + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`owl-dot inline-block mx-1 ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span className={`inline-block w-3 h-3 rounded-full ${
                  activeIndex === idx ? 'bg-primary' : 'bg-gray-400'
                }`}></span>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {children.length > visibleItems && (
        <>
          <button 
            className="owl-prev absolute left-3 top-1/2 transform -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            <div className="btn btn-dark flex items-center justify-center" style={{ width: '45px', height: '45px' }}>
              <span className="carousel-control-prev-icon"></span>
            </div>
          </button>
          <button 
            className="owl-next absolute right-3 top-1/2 transform -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            <div className="btn btn-dark flex items-center justify-center" style={{ width: '45px', height: '45px' }}>
              <span className="carousel-control-next-icon"></span>
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default OwlCarousel;
