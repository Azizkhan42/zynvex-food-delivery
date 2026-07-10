import { Heart, Plus, Star } from "lucide-react";

const FoodCard = ({ image, title, category, price, rating }) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>

          <div className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
            <Star size={15} fill="currentColor" />

            {rating}
          </div>
        </div>

        <p className="mt-2 text-gray-500">{category}</p>

        <div className="mt-6 flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-900">${price}</h4>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition hover:scale-110">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
