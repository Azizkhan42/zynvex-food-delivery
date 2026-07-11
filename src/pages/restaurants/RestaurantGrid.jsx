import RestaurantCard from "../../components/cards/RestaurantCard";
import restaurants from "../../data/restaurants";

const RestaurantGrid = () => {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          {...restaurant}
        />
      ))}
    </div>
  );
};

export default RestaurantGrid;