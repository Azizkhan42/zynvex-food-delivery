import Container from "../../components/common/Container";
import SearchBar from "../../components/ui/SearchBar";

const RestaurantHero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-400 py-16 text-white">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-black">
            Find Your Favorite Restaurant
          </h1>

          <p className="mt-4 text-lg text-orange-100">
            Browse hundreds of restaurants and discover amazing food near you.
          </p>

          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RestaurantHero;