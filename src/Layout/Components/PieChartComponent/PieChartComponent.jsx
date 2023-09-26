import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredApplyDonation } from "../../../Utilities/LocalStorage";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const PieChartComponent = ({ cards }) => {
  const storedIds = getStoredApplyDonation();
  const storedIdsPercents = (storedIds.length / cards.length) * 100;
  const cardsPercents = 100 - storedIdsPercents;
  const data = [
    { name: "cardsPercents", value: cardsPercents },
    { name: "storedIdsPercents", value: storedIdsPercents },
  ];

  return (
    <div className="flex items-center justify-center">
      <PieChart width={300} height={400}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
