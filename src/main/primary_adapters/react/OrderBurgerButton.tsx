import { useService } from "./OrderBurgerProvider";

export const OrderBurgerButton: React.FC = () => {
  const orderBurgerUseCase = useService("orderService");

  const burgerOrder = {
    bun: "sesame",
    cheese: "cheddar",
    patty: "beef",
    topping: "lettuce",
  };

  return (
    <button
      onClick={() =>
        orderBurgerUseCase
          .orderBurger(burgerOrder)
          .then(() => {
            window.alert("Burger ordered!");
          })
          .catch((error) => {
            window.alert("Error ordering burger: " + error.message);
          })
      }
    >
      Click to order a burger!
    </button>
  );
};
