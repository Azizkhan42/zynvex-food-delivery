import Container from "../../components/common/Container";
import Logo from "../../components/common/Logo";
import SearchBar from "../../components/ui/SearchBar";
import Button from "../../components/ui/Button";

const Home = () => {
  return (
    <Container className="py-10 space-y-8">
      <Logo />

      <SearchBar />

      <div className="flex gap-4">
        <Button>Login</Button>

        <Button variant="outline">
          Register
        </Button>
      </div>
    </Container>
  );
};

export default Home;