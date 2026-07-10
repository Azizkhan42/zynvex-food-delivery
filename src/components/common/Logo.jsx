import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] text-xl font-bold text-white">
        Z
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Zynvex
        </h2>

        <p className="-mt-1 text-xs text-gray-500">
          Food Delivery
        </p>
      </div>
    </Link>
  );
};

export default Logo;