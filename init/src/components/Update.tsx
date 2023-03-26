import { useState } from "react";

function Update() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Pizza",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product1", quantity: 1 },
      { id: 2, title: "product2", quantity: 1 },
    ],
  });

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  const updatePlayer = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
  };

  const addTopping = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };

  const increaseProduct = (id: number) => {
    setCart({
      ...cart,
      items: cart.items.map((e) =>
        e.id === id ? { ...e, quantity: e.quantity + 1 } : e
      ),
    });
  };

  const bugResolved = (id: number) => {
    setBugs(bugs.map((bug) => (bug.id === id ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <div>Update data structure</div>

      <div>
        <h3>Game</h3>
        <p>{game.player.name}</p>
        <button onClick={updatePlayer}>Update Player</button>
      </div>

      <div>
        <h3>Pizza</h3>
        <p>Toppings: {pizza.toppings}</p>
        <button onClick={addTopping}>Add Topping</button>
      </div>

      <div>
        <h3>Products:</h3>
        {cart.items.map((e) => (
          <p key={e.id}>
            {e.title}: {e.quantity}
            <button onClick={() => increaseProduct(e.id)}>Increase</button>
          </p>
        ))}
      </div>

      <div>
        <h3>Bugs:</h3>
        {bugs.map((bug) => (
          <p>
            {bug.title}, resolved: {bug.fixed.toString()}
            {!bug.fixed && (
              <button onClick={() => bugResolved(bug.id)}>Resolve</button>
            )}
          </p>
        ))}
      </div>
    </>
  );
}

export default Update;
