import Container from "../common/Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed",
    review:
      "Amazing food delivery service. Very fast and fresh.",
  },
  {
    name: "Sarah",
    review:
      "The UI is beautiful and delivery is always on time.",
  },
  {
    name: "Ali",
    review:
      "Best food ordering app I've ever used.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#FFF8F2] py-24">
      <Container>

        <div className="text-center">

          <span className="font-semibold text-orange-500">
            Testimonials
          </span>

          <h2 className="mt-2 text-5xl font-black">
            What Our Customers Say
          </h2>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex text-yellow-500">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>

              <p className="leading-8 text-gray-500">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Testimonials;