import Button from "../ui/Button";
import Container from "../common/Container";

const OfferBanner = () => {
  return (
    <section className="py-24 bg-[#FFF8F2]">
      <Container>
        <div className="overflow-hidden rounded-[40px] bg-[var(--color-primary)] p-14 text-white">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Limited Time
          </span>

          <h2 className="mt-6 max-w-xl text-5xl font-black leading-tight">
            Get 50% OFF On Your First Order
          </h2>

          <p className="mt-6 max-w-lg text-lg text-orange-100">
            Download our app today and enjoy free delivery on your first
            purchase.
          </p>

          <div className="mt-10">
            <Button className="bg-white text-[var(--color-primary)] hover:bg-gray-100">
              Order Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfferBanner;
