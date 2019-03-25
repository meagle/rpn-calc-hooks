import {useEffect} from 'react';

const useKeyboardEvent = (key: string, callback: () => void) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [key, callback]);
};

export default useKeyboardEvent;
