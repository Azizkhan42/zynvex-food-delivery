import Container from "../../components/common/Container";

import RestaurantHero from "./RestaurantHero";
import RestaurantFilter from "./RestaurantFilter";
import RestaurantGrid from "./RestaurantGrid";

const Restaurants = () => {
  return (
    <>
      <RestaurantHero />

      <section className="bg-[#fafafa] py-20">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-4xl font-black">
                Popular Restaurants
              </h2>

              <p className="mt-3 text-gray-500">
                Showing 120+ restaurants
              </p>
            </div>

            <RestaurantFilter />
          </div>

          <RestaurantGrid />
        </Container>
      </section>
    </>
  );
};

export default Restaurants;