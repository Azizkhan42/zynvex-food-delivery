import Container from "../common/Container";
import CategoryCard from "../cards/CategoryCard";
import SectionTitle from "../common/SectionTitle";

import categories from "../../data/categories";

const Categories = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex items-end justify-between">
          <SectionTitle
            subtitle="Categories"
            title="Explore by Category"
          />

          <button className="font-semibold text-orange-500 transition hover:text-orange-600">
            View All →
          </button>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;