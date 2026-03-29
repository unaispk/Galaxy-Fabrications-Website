import React, { useState, useRef, useEffect } from 'react';
import '../styles/WhatsApp.css';

const WhatsApp = () => {
  // Start positioned bottom-left by default. 
  // We use numeric states because we'll be manipulating position dynamically via drag.
  const [position, setPosition] = useState({ x: 20, y: 0 }); 
  const isDragging = useRef(false);
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  
  
  // Wait for component mount to read innerHeight accurately
  useEffect(() => {
    setPosition({ x: 20, y: window.innerHeight - 90 });
    
    // Optional: Re-adjust if window resized heavily pushing button off screen
    const handleResize = () => {
      const bWidth = buttonRef.current ? buttonRef.current.offsetWidth : 140;
      const bHeight = buttonRef.current ? buttonRef.current.offsetHeight : 55;

      setPosition(prev => ({
        x: Math.min(prev.x, window.innerWidth - bWidth),
        y: Math.min(prev.y, window.innerHeight - bHeight)
      }));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = (e) => {
    e.preventDefault(); // Prevent accidental image/text selection dragging
    isDragging.current = false;
    
    // Calculate where inside the button the user clicked
    dragStartOffset.current = { 
      x: e.clientX - position.x, 
      y: e.clientY - position.y 
    };

    const handlePointerMove = (moveEvt) => {
      // If pointer moved more than minimal pixels, classify as "drag", not click
      isDragging.current = true;
      
      const newX = moveEvt.clientX - dragStartOffset.current.x;
      const newY = moveEvt.clientY - dragStartOffset.current.y;
      
      // Clamp bounds to keep button from falling off screen dynamically
      const boundWidth = buttonRef.current ? buttonRef.current.offsetWidth : 140;
      const boundHeight = buttonRef.current ? buttonRef.current.offsetHeight : 55;

      const boundedX = Math.max(0, Math.min(newX, window.innerWidth - boundWidth));
      const boundedY = Math.max(0, Math.min(newY, window.innerHeight - boundHeight));
      
      setPosition({ x: boundedX, y: boundedY });
    };

    const handlePointerUp = () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    // Attach listeners to window so dragging doesn't break if pointer leaves button bounds very quickly
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const handleClick = (e) => {
    // If the user was dragging the button around, prevent the hyperlink/click action!
    if (isDragging.current) {
      e.preventDefault();
      return;
    }
    // Launch WhatsApp
    window.open('https://wa.me/919645565657', '_blank');
  };

  return (
    <div
      ref={buttonRef}
      className="whatsapp-float-btn"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      title="Chat with us on WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="34" 
        height="34" 
        fill="#ffffff" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: 'none' }} /* ensure clicks hit the div wrapper, not the SVG paths */
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
      <span className="whatsapp-text">Chat Now</span>
    </div>
  );
};

export default WhatsApp;
