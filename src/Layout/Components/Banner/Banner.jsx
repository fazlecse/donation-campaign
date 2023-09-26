import PropTypes from "prop-types";
import bgImage from "../../../assets/banner-bg.png";
const Banner = ({ handleSearchInputField }) => {
  return (
    <div
      className="pt-32 pb-40 relative z-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-5xl text-black font-medium">
          I Grow By Helping People In Need
        </h1>
        <div className="form-control mt-10">
          <label className="input-group justify-center">
            <input
              onChange={handleSearchInputField}
              type="text"
              placeholder="Search here...."
              className="input input-bordered"
            />
            <span className="bg-[#FF444A]">Search</span>
          </label>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-80 -z-10"></div>
    </div>
  );
};
Banner.propTypes = {
  handleSearchInputField: PropTypes.func.isRequired,
};
export default Banner;
