import { Link } from "react-router-dom";

const Card = ({ card }) => {
  console.log(card);
  const { Picture, Title, Category, Card_bg_Color, Category_bg_Color , Text_Button_bg_Color} =
    card || {};
  return (
    <div>
      <Link to={"/"}>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={Picture} alt="Shoes" />
          </figure>
          <div
            className="p-5 font-semibold"
            style={{ backgroundColor: Card_bg_Color }}
          >
            <span
              className="px-4 py-2 rounded-md  inline-flex"
              style={{
                backgroundColor: Category_bg_Color,
                color: Text_Button_bg_Color,
              }}
            >
              {Category}
            </span>
            <h2
              className="card-title mt-4 " style={{ color: Text_Button_bg_Color }}
            >
              {Title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
