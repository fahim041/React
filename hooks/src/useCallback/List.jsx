import { useEffect, useState } from "react";

export function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return items.map((item, key) => <div key={key}>{item}</div>);
}
