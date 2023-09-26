import { useLoaderData } from "react-router-dom";
import Banner from "../../Layout/Components/Banner/Banner";
import Cards from "../../Cards/Cards";
import { useState } from "react";

const Home = () => {

  const cards = useLoaderData();
  const [filterCards, setFilterCards] = useState([]);

console.log(filterCards);
  const handleSearchInputField = (event) => {
    const value = event.target.value;
    const filterCards = cards.filter(
      (card) => card.Category.toLowerCase() == value.toLowerCase()
    );
    console.log("filterCards", filterCards);
    setFilterCards(filterCards);
  };



  return (
    <div>
      <Banner handleSearchInputField={handleSearchInputField}></Banner>
      <Cards cards={cards}></Cards>
    </div>
  );
};

export default Home;
