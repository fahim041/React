import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  onSelect: (index: number) => void;
}

function ListGroup({ items, heading, onSelect }: Props) {
  return (
    <div>
      <h1>{heading}</h1>
      {items.map((item, index) => (
        <div key={index} onClick={() => onSelect(index)}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default ListGroup;
