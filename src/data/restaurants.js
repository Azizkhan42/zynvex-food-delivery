import burger from "../assets/images/burger.png";
import pizza from "../assets/images/pizza.png";
import fries from "../assets/images/fries.png";
import drink from "../assets/images/drink.png";

const restaurants = [
  {
    id: 1,
    image: burger,
    name: "Burger House",
    category: "Burger",
    rating: "4.9",
    time: "20-25 Min",
    price: "14",
    discount: "20% OFF",
  },
  {
    id: 2,
    image: pizza,
    name: "Pizza Italiano",
    category: "Pizza",
    rating: "4.8",
    time: "25-30 Min",
    price: "18",
    discount: "15% OFF",
  },
  {
    id: 3,
    image: fries,
    name: "Snack Corner",
    category: "Fries",
    rating: "4.7",
    time: "15-20 Min",
    price: "10",
    discount: "10% OFF",
  },
  {
    id: 4,
    image: drink,
    name: "Fresh Drinks",
    category: "Drinks",
    rating: "4.9",
    time: "10-15 Min",
    price: "5",
    discount: "30% OFF",
  },
  {
    id: 5,
    image: burger,
    name: "Burger King",
    category: "Burger",
    rating: "4.8",
    time: "18-22 Min",
    price: "16",
    discount: "25% OFF",
  },
  {
    id: 6,
    image: pizza,
    name: "Pizza Palace",
    category: "Pizza",
    rating: "4.9",
    time: "25 Min",
    price: "20",
    discount: "10% OFF",
  },
];

export default restaurants;