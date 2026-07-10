const CategoryCard = ({ title, image, restaurants }) => {
  return (
    <div className="group cursor-pointer rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>

        <p className="mt-1 text-sm text-gray-500">{restaurants} Restaurants</p>
      </div>
    </div>
  );
};

export default CategoryCard;
