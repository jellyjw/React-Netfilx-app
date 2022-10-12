<<<<<<< HEAD
//리액트에서 hooks를 만들때에는 항상 파일명이 use로 시작해야한다.
=======
>>>>>>> 7a12e90c891637d6914ebde6a2d9c32fe623e682
import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
