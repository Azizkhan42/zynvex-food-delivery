import Container from "../common/Container";
import RestaurantCard from "../cards/RestaurantCard";

import burger from "../../assets/images/burger.png";
import pizza from "../../assets/images/pizza.png";
import fries from "../../assets/images/fries.png";

const restaurants = [
  {
    image: burger,
    name: "Burger House",
    category: "Fast Food",
    rating: "4.9",
    time: "20-25 Min",
    price: "14",
    discount: "20% OFF",
  },
  {
    image: pizza,
    name: "Pizza Italiano",
    category: "Italian",
    rating: "4.8",
    time: "25-30 Min",
    price: "18",
    discount: "15% OFF",
  },
  {
    image: fries,
    name: "Snack Corner",
    category: "French Fries",
    rating: "4.7",
    time: "15-20 Min",
    price: "10",
    discount: "10% OFF",
  },
];
const FeaturedRestaurants = () => {
  return (
    <section className="bg-[#FFF8F2] py-24">

      <Container>

        <div className="mb-14 flex items-end justify-between">

          <div>

            <span className="font-semibold text-orange-500">
              Restaurants
            </span>

            <h2 className="mt-2 text-4xl font-black text-gray-900">
              Featured Restaurants
            </h2>

          </div>

          <button className="font-semibold text-orange-500 hover:text-orange-600">
            View All →
          </button>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
              {...restaurant}
            />
          ))}

        </div>

      </Container>

    </section>
  );
};

export default FeaturedRestaurants;