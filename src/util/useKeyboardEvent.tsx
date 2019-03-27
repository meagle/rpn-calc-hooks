import {useEffect} from 'react';
import {ALL_KEYS} from './keys';

const useKeyboardEvent = (key: string, callback: () => void) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === ALL_KEYS[key]['js-key']) {
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
