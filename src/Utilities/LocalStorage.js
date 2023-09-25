const getStoredApplyDonation = () => {
    const storedApplyDonation = localStorage.getItem("donations");
    if (storedApplyDonation) {
        return JSON.parse(storedApplyDonation);
    }
    return [];
}

const saveApplyDonation = id => {
    const storedApplyDonation = getStoredApplyDonation();
    const exist = storedApplyDonation.find(donationId => donationId === id);
    if (!exist) {
        storedApplyDonation.push(id);
        localStorage.setItem("donations", JSON.stringify(storedApplyDonation))
    }
}
export { getStoredApplyDonation, saveApplyDonation}