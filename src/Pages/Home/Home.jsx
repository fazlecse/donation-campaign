import { useLoaderData } from "react-router-dom";
import Banner from "../../Layout/Components/Banner/Banner";
import Cards from "../../Cards/Cards";
import { useEffect, useState } from "react";

const Home = () => {
  const cards = useLoaderData();
  const [cartData, setCartData] = useState([]);
  const [filterCards, setFilterCards] = useState([]);

  const handleSearchInputField = (event) => {
    const value = event.target.value;
    const filterCards = cards.filter(
      (card) => card.Category.toLowerCase() == value.toLowerCase()
    );
    setFilterCards(filterCards);
  };

  useEffect(() => {
    if (!filterCards.length) {
      setFilterCards(cards);
    }else{
    setCartData(filterCards);
    }

  }, [filterCards]);



  return (
    <div>
      <Banner handleSearchInputField={handleSearchInputField}></Banner>
      <Cards cards={cartData}></Cards>
    </div>
  );
};

export default Home;
