import { useLoaderData } from "react-router-dom";
import Banner from "../../Layout/Components/Banner/Banner";
import Cards from "../../Cards/Cards";

const Home = () => {
    const cards = useLoaderData();
    return (
      <div>
        <Banner></Banner>
        <Cards cards={cards}></Cards>
      </div>
    );
};

export default Home;