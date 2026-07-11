import burger from "../assets/images/burger.png";
import pizza from "../assets/images/pizza.png";
import fries from "../assets/images/fries.png";

const menu = [
  {
    id: 1,
    restaurantId: 1,
    name: "Cheese Burger",
    image: burger,
    price: 12,
    category: "Burger",
    rating: 4.8,
  },
  {
    id: 2,
    restaurantId: 1,
    name: "Double Burger",
    image: burger,
    price: 18,
    category: "Burger",
    rating: 4.9,
  },
  {
    id: 3,
    restaurantId: 2,
    name: "Pepperoni Pizza",
    image: pizza,
    price: 20,
    category: "Pizza",
    rating: 4.9,
  },
  {
    id: 4,
    restaurantId: 2,
    name: "Chicken Pizza",
    image: pizza,
    price: 18,
    category: "Pizza",
    rating: 4.7,
  },
  {
    id: 5,
    restaurantId: 3,
    name: "Loaded Fries",
    image: fries,
    price: 10,
    category: "Fries",
    rating: 4.8,
  },
];

export default menu;
