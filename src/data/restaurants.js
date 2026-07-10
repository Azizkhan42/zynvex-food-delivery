import burger from "../assets/images/burger.png";
import pizza from "../assets/images/pizza.png";
import fries from "../assets/images/fries.png";
import drink from "../assets/images/drink.png";

const restaurants = [
  {
    id: 1,
    name: "Burger House",
    image: burger,
    category: "Fast Food",
    rating: 4.9,
    deliveryTime: "20-25 min",
    deliveryFee: "Free Delivery",
    discount: "20% OFF",
    price: "$14"
  },

  {
    id: 2,
    name: "Italian Pizza",
    image: pizza,
    category: "Italian",
    rating: 4.8,
    deliveryTime: "25-30 min",
    deliveryFee: "Free Delivery",
    discount: "15% OFF",
    price: "$18"
  },

  {
    id: 3,
    name: "Snack Corner",
    image: fries,
    category: "Snacks",
    rating: 4.7,
    deliveryTime: "15-20 min",
    deliveryFee: "$2 Delivery",
    discount: "10% OFF",
    price: "$10"
  },

  {
    id: 4,
    name: "Fresh Drinks",
    image: drink,
    category: "Beverages",
    rating: 4.9,
    deliveryTime: "10-15 min",
    deliveryFee: "Free Delivery",
    discount: "30% OFF",
    price: "$5"
  },
];

export default restaurants;