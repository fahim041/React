import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like";
import Update from "./components/Update";

function App() {
  const items = ["New York", "London", "Tokyo", "Paris"];
  const heading = "List";
  const [showAlert, setShowAlert] = useState(true);

  const onSelect = (index: number) => {
    console.log("List clicked", index);
  };

  const removeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {/* <ListGroup items={items} heading={heading} onSelect={onSelect} />
      {showAlert && <Alert removeAlert={removeAlert}>Hello Alert</Alert>}

      <Like propsOnClick={() => console.log("like clicked")} initial={false} /> */}
      <Update />
    </>
  );
}

export default App;
