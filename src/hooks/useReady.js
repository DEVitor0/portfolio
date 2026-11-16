import { useEffect, useState } from "react";

/** Vira `true` um frame depois da primeira pintura, para as transições CSS de entrada rodarem. */
export function useReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setReady(true));
    });
    return () => cancelAnimationFrame(id);
  }, []);
  return ready;
}
