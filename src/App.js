import logo from "./logo.svg";
import "./App.css";
import CartModal from "./components/UI/CartModal";

import react, { useState } from "react";
import InfoSection from "./components/InfoSection/InfoSection";
import MainHeader from "./components/MainHeader/MainHeader";
import FoodMenu from "./components/FoodMenu/FoodMenu";

function App() {
  const items = [
    {
      id: 1,
      name: "Python",
      description: "Very delicious shit",
      price: 200,
    },
    {
      id: 2,
      name: "Hui Lo",
      description: "По сути вкусно, по вкусу - хуета",
      price: 150,
    },
    {
      id: 3,
      name: "Рыбка",
      description: "Пахнет хорошо",
      price: 400,
    },
  ];

  const cartItems = [];

  const [isCartItems, SetIsCartItems] = useState(cartItems);

  const [cartOpen, setCartOpen] = useState();
  const [isSumAmount, setIsSumAmount] = useState(0);

  const onAddToCartHandler = (amountValue, name, descr) => {
    setIsSumAmount(+isSumAmount + amountValue);
    SetIsCartItems((prevItems) => {
      const updatedItems = [
        ...prevItems,
        {
          id: Math.random(10),
          name: name,
          descr: descr,
          amount: isSumAmount,
        },
      ];
      return updatedItems;
    });
  };
  // const onAddToCart = (event) => {
  //   event.preventDefault();
  //   setIsSumAmount(isSumAmount + 2 )
  // };

  const onCartOpenHandler = (event) => {
    event.preventDefault();
    setCartOpen(true);
  };

  const onCartCloseHandler = (event) => {
    event.preventDefault();
    setCartOpen();
  };

  return (
    <div className="App">
      {cartOpen && (
        <CartModal
          onCloseHandler={onCartCloseHandler}
          cartItemsList={isCartItems}
        />
      )}
      <MainHeader isClicked={onCartOpenHandler} sumAmount={isSumAmount} />
      <InfoSection />
      <FoodMenu itemsList={items} onSubmit={onAddToCartHandler} />
    </div>
  );
}

export default App;
