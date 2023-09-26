import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplyDonation } from "../Utilities/LocalStorage";
import DonationCard from "../Layout/Components/DonationCard/DonationCard";
import NotFound from "../Layout/Components/NotFound/NotFound";

const Donation = () => {
  const cards = useLoaderData();
  const [dataLength, setDataLength] = useState(4);
  const [appliedDonations, setAppliedDonations] = useState([]);
  const [localStorageData, setLocalStorageData] = useState([]);
  useEffect(() => {
    const storedIds = getStoredApplyDonation();

    if (cards.length > 0) {
      const applyedDonations = cards.filter((card) =>
        storedIds.includes(card.id)
      );
      setAppliedDonations(applyedDonations);
    }
  }, [cards]);
  useEffect(() => {
    const storedIds = getStoredApplyDonation();
    setLocalStorageData(storedIds);
  }, []);

  return (
    <div className="container px-4 mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
        {appliedDonations.slice(0, dataLength).map((appliedDonation) => (
          <DonationCard
            key={appliedDonation.id}
            appliedDonation={appliedDonation}
          ></DonationCard>
        ))}
      </div>
      <div className={` ${localStorageData.length && "hidden"}`}>
        <NotFound></NotFound>
      </div>
      <div
        className={`flex justify-center ${
          (dataLength === appliedDonations.length && "hidden") ||
          (appliedDonations.length < 4 && "hidden")
        }`}
      >
        <button
          onClick={() => setDataLength(appliedDonations.length)}
          className="btn py-2 px-4 mb-10 rounded-md text-white bg-[#009444] hover:text-white hover:bg-[#54bb59]"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
