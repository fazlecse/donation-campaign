import { Link } from "react-router-dom";

const DonationCard = ({ appliedDonation }) => {
// const 

  const {
    id,
    Picture,
    Title,
    Category,
    Category_bg_Color,
    Card_bg_Color,
    Text_Button_bg_Color,
    Price,
  } = appliedDonation || {};

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-full object-cover"
            src={Picture}
            alt="image"
          />
        </figure>
        <div className="p-5 w-full" style={{ backgroundColor: Card_bg_Color }}>
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
            className="card-title mt-4"
            style={{ color: Text_Button_bg_Color }}
          >
            {Title}
          </h2>
          <p className="font-medium text-lg">${Price}</p>
          <div className="card-actions">
            <Link to={`/donation/${id}`}>
              <button
                className="btn text-white mt-5"
                style={{ backgroundColor: Text_Button_bg_Color }}
              >
                View details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
