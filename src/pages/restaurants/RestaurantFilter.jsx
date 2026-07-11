const filters = [
  "All",
  "Burger",
  "Pizza",
  "Chicken",
  "Dessert",
  "Coffee",
  "Healthy",
];

const RestaurantFilter = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default RestaurantFilter;