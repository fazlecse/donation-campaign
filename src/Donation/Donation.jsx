import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplyDonation } from "../Utilities/LocalStorage";
import DonationCard from "../Layout/Components/DonationCard/DonationCard";

const Donation = () => {
    const cards = useLoaderData();
    const [appliedDonations, setAppliedDonations] = useState([]);
    useEffect(()=>{
        const storedIds = getStoredApplyDonation();
        if(cards.length > 0){
            const applyedDonations = cards.filter(card=> storedIds.includes(card.id))
            setAppliedDonations(applyedDonations);
        }
    },[])
    return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
        {appliedDonations.map((appliedDonation) => (
          <DonationCard
            key={appliedDonation.id}
            appliedDonation={appliedDonation}
          ></DonationCard>
        ))}
      </div>
    );
};

export default Donation;