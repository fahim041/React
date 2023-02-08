import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
}

export default function useLocalStorage(key, intialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, intialValue);
  });

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value]);

  return [value, setValue];
}
