import Card from "../Card/Card";
const Cards = ({ cards, filterCards }) => {
  return (
    <div className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
