import { useEffect, useState } from "react";

export function useLocalStorageState(initialValue, name) {
  const [stored, setStored] = useState(function () {
    const storedValue = localStorage.getItem(name);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(name, JSON.stringify(stored));
    },
    [stored, name]
  );

  return [stored, setStored];
}
