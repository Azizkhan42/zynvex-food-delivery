import Container from "../common/Container";
import RestaurantCard from "../cards/RestaurantCard";
import SectionTitle from "../common/SectionTitle";

import restaurants from "../../data/restaurants";

const FeaturedRestaurants = () => {
  return (
    <section className="bg-[#FFF8F2] py-24">
      <Container>
        <div className="flex items-end justify-between">
          <SectionTitle subtitle="Restaurants" title="Featured Restaurants" />

          <button className="font-semibold text-orange-500 transition hover:text-orange-600">
            View All →
          </button>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedRestaurants;
