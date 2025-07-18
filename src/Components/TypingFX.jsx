import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = ({ items = [] }) => {
  const elRef = useRef(null); // Reference to span element
  const typedRef = useRef(null); // Reference to Typed instance

  useEffect(() => {
    typedRef.current = new Typed(elRef.current, {
      strings: items,
      typeSpeed: 120,
      backSpeed: 70,
      loop: true,
      smartBackspace: true,
      lifeLike: true,
      showCursor: false,
    });

    return () => {
      // Destroy on cleanup
      typedRef.current?.destroy();
    };
  }, [items]); // Re-run only if 'items' changes

  return (
    <span className="Output" ref={elRef}></span>
  );
};

export default TypingEffect;