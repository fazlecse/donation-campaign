import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";

const CardDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const [cards, setCards] = useState({});
  const loadCards = async () => {
    const response = await fetch("http://127.0.0.1:5173/cards.json");
    const cards = await response.json();
    const cardId = cards.find((card) => card.id === idInt);

    setCards(cardId);
  };
  useEffect(() => {
    loadCards();
  }, [id]);

    console.log(cards);


  return (
    <div className="container mx-auto py-10">
      <figure className="relative">
        <img className="w-full" src={cards.Picture} alt="" />
        <div className="absolute bg-black w-full  bottom-0 left-0 z-10 opacity-80 py-10">
          <button
            className="btn ml-10 text-white "
            style={{ backgroundColor: cards.Text_Button_bg_Color }}
          >
            Donate $290
          </button>
        </div>
      </figure>
      <h2 className="text-4xl mt-5 font-semibold">Title: {cards.Title}</h2>
      <p className="mt-5">{cards.Description}</p>
    </div>
  );
};

export default CardDetails;
