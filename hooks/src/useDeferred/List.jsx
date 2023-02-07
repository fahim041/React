import { useDeferredValue, useMemo } from "react";

export function List({ input }) {
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  return list;
}
