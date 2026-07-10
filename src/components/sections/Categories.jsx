import Container from "../common/Container";
import CategoryCard from "../cards/CategoryCard";

import burger from "../../assets/images/burger.png";
import pizza from "../../assets/images/pizza.png";
import fries from "../../assets/images/fries.png";
import drink from "../../assets/images/drink.png";

const categories = [
  {
    title: "Burger",
    image: burger,
    restaurants: 180,
  },
  {
    title: "Pizza",
    image: pizza,
    restaurants: 250,
  },
  {
    title: "Fries",
    image: fries,
    restaurants: 120,
  },
  {
    title: "Drinks",
    image: drink,
    restaurants: 95,
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="font-semibold text-orange-500">
              Categories
            </span>

            <h2 className="mt-2 text-4xl font-black text-gray-900">
              Explore by Category
            </h2>
          </div>

          <button className="font-semibold text-orange-500 hover:text-orange-600">
            View All →
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <CategoryCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;