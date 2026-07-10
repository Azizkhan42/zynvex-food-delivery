import Container from "../../components/common/Container";

const Restaurants = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <Container>
        <h1 className="text-5xl font-black text-gray-900">
          Restaurants
        </h1>

        <p className="mt-4 text-lg text-gray-500">
          Browse all restaurants.
        </p>
      </Container>
    </section>
  );
};

export default Restaurants;