/* Hook прикручивает observer к сайту. При появлении в поле видимости элемента
 * вызывается callback.
 */

import { useEffect, useRef } from "react";

function useScroll(targetRef, callback) {
  const observer = useRef();
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {  // Станет true - когда элемент в зоне видимости
        callback();
      }
    }, options)

    observer.current.observe(targetRef.current); // Указание за каким элементом следить

    return function () {
      observer.current.unobserve(targetRef.current); // Отписываемся за слежкой
    }
  }, callback);
}

export default useScroll;