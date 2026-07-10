import Container from "../../components/common/Container";
import Button from "../../components/ui/Button";

const Home = () => {
  return (
    <Container className="py-10">
      <h1 className="mb-6 text-4xl font-bold">
        Zynvex Food Delivery
      </h1>

      <div className="flex flex-wrap gap-4">
        <Button>Primary</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="success">
          Success
        </Button>

        <Button variant="danger">
          Danger
        </Button>
      </div>
    </Container>
  );
};

export default Home;