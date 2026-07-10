import { Search, Star, Clock3, UtensilsCrossed } from "lucide-react";

import Button from "../ui/Button";
import Container from "../common/Container";

import burger from "../../assets/images/burger.png";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#FFF8F2]">
      <Container className="py-14 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              <Star size={16} fill="currentColor" />
              Best Food Delivery in Qatar
            </div>

            <h1 className="mt-7 text-5xl font-black leading-tight text-gray-900 lg:text-7xl">
              Order Your
              <span className="block text-[var(--color-primary)]">
                Favorite Food
              </span>
              Anytime
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              Discover delicious meals from the best restaurants near you. Fast
              delivery, amazing offers and thousands of choices.
            </p>

            {/* Search */}

            <div className="mt-10 flex max-w-xl items-center rounded-2xl bg-white p-2 shadow-xl">
              <div className="pl-3 text-gray-400">
                <Search />
              </div>

              <input
                type="text"
                placeholder="Search food or restaurant..."
                className="flex-1 bg-transparent px-4 py-3 outline-none"
              />

              <Button>Search</Button>
            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg">Order Now</Button>

              <Button variant="outline" size="lg">
                View Menu
              </Button>
            </div>

            {/* Stats */}

            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h2 className="text-4xl font-black text-gray-900">1000+</h2>

                <p className="mt-1 text-gray-500">Restaurants</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-gray-900">30 Min</h2>

                <p className="mt-1 text-gray-500">Delivery</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-gray-900">4.9★</h2>

                <p className="mt-1 text-gray-500">Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
            {/* Orange Circle */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-orange-100"></div>

            <img
              src={burger}
              alt=""
              className="relative z-20 w-full max-w-[650px] drop-shadow-[0_40px_40px_rgba(0,0,0,0.25)]"
            />

            {/* Rating */}

            <div className="absolute left-0 top-16 z-30 rounded-3xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-yellow-100 p-3">
                  <Star fill="currentColor" className="text-yellow-500" />
                </div>

                <div>
                  <h4 className="font-bold">4.9 Rating</h4>

                  <p className="text-sm text-gray-500">25k Reviews</p>
                </div>
              </div>
            </div>

            {/* Delivery */}

            <div className="absolute bottom-12 right-0 z-30 rounded-3xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-3">
                  <Clock3 className="text-green-600" />
                </div>

                <div>
                  <h4 className="font-bold">Fast Delivery</h4>

                  <p className="text-sm text-gray-500">20-30 Minutes</p>
                </div>
              </div>
            </div>

            {/* Restaurant */}

            <div className="absolute bottom-48 left-2 z-30 rounded-3xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-3">
                  <UtensilsCrossed className="text-orange-600" />
                </div>

                <div>
                  <h4 className="font-bold">1000+</h4>

                  <p className="text-sm text-gray-500">Restaurants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
