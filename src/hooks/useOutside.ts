import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref: any, setter: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setter((prevSel: any) => (prevSel === false ? true : true));
        document.body.classList.remove('overflow-hidden');
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setter]);
}

/**
 * Component that alerts if you click outside of it
 */
/* export default function OutsideAlerter(props: any) {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return <div ref={wrapperRef}>{props.children}</div>
} */
