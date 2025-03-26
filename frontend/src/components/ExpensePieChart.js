import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ expenses }) => {
  const categories = expenses.reduce((acc, curr) => {
    //console.log(curr, "current expense in pie chart");
    const key = curr.expenseName || "Other";
    acc[key] = (acc[key] || 0) + curr.expenseAmount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(categories),
        backgroundColor: [
          "#f87171",
          "#60a5fa",
          "#34d399",
          "#facc15",
          "#a78bfa",
          "#f472b6",
        ],
        borderWidth: 1,
      },
    ],
  };
  //   console.log(data, "data in pie");

  return <Pie data={data} />;
};

export default ExpensePieChart;
