import { Clock3, Heart, Plus, Star } from "lucide-react";

const RestaurantCard = ({
  image,
  name,
  category,
  rating,
  time,
  price,
  discount,
}) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white">
          {discount}
        </span>

        <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>

          <div className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
            <Star size={15} fill="currentColor" />

            {rating}
          </div>
        </div>

        <p className="mt-2 text-gray-500">{category}</p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Clock3 size={18} />

            {time}
          </div>

          <h4 className="text-2xl font-bold text-gray-900">${price}</h4>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-primary)] py-4 font-semibold text-white transition hover:bg-orange-600">
          <Plus size={18} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
