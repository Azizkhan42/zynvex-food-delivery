import Container from "../common/Container";
import FoodCard from "../cards/FoodCard";

import burger from "../../assets/images/burger.png";
import pizza from "../../assets/images/pizza.png";
import fries from "../../assets/images/fries.png";
import drink from "../../assets/images/drink.png";

const foods = [
  {
    image: burger,
    title: "Cheese Burger",
    category: "Fast Food",
    price: 14,
    rating: 4.9,
  },
  {
    image: pizza,
    title: "Pepperoni Pizza",
    category: "Italian",
    price: 18,
    rating: 4.8,
  },
  {
    image: fries,
    title: "French Fries",
    category: "Snacks",
    price: 8,
    rating: 4.7,
  },
  {
    image: drink,
    title: "Cold Drink",
    category: "Beverages",
    price: 5,
    rating: 4.9,
  },
];

const PopularFoods = () => {
  return (
    <section className="py-24 bg-white">

      <Container>

        <div className="mb-14 flex items-end justify-between">

          <div>

            <span className="font-semibold text-orange-500">
              Popular Foods
            </span>

            <h2 className="mt-2 text-4xl font-black">
              Best Selling Foods
            </h2>

          </div>

          <button className="font-semibold text-orange-500">
            View All →
          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {foods.map((food) => (
            <FoodCard
              key={food.title}
              {...food}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default PopularFoods;