import { useEffect } from "react";

export function useKey(keycode, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === keycode.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);

      return () => {
        document.removeEventListener("keydown", callBack);
      };
    },
    [keycode, action]
  );
}
