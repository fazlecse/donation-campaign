import { useLoaderData } from "react-router-dom";
import PieChartComponent from "../Layout/Components/PieChartComponent/PieChartComponent";

const Statistics = () => {
    const cards = useLoaderData();
    
    return (
      <div>
        <PieChartComponent cards={cards}></PieChartComponent>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center text-xl font-medium">
          <div className="flex items-center gap-5">
            Your Donation{" "}
            <div className="bg-[#00C49F] w-[150px] h-[15px]"></div>
          </div>
          <div className="flex items-center gap-5">
            Total Donation{" "}
            <div className="bg-[#FF444A] w-[150px] h-[15px]"></div>
          </div>
        </div>
      </div>
    );
};  

export default Statistics;