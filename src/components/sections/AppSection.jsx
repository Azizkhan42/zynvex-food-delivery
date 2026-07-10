import Container from "../common/Container";
import Button from "../ui/Button";
import burger from "../../assets/images/burger.png";

const AppSection = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src={burger}
              alt="Mobile App"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>

          <div>
            <span className="font-semibold text-orange-500">
              Mobile Application
            </span>

            <h2 className="mt-3 text-5xl font-black text-gray-900">
              Download Our App &
              <br />
              Order Anywhere
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              Enjoy faster ordering, exclusive offers and live order tracking
              with our mobile application.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button>App Store</Button>

              <Button variant="outline">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppSection;