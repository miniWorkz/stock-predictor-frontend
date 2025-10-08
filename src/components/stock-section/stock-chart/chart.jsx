import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const StockChart = ({ticker}) => {
    const [chartData, setChartData] = useState(null);
    useEffect(() => {
        const fetchStock = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/stock/${ticker}`);
            setChartData({
                labels: res.data.dates,
                datasets: [
                    {
                        label: `${ticker} Price`,
                        data: res.data.prices,
                        borderColor: "rgb(75, 192, 192)",
                        fill: false,
                        tension: 0.1
                    }
                ]
            });
        };
        fetchStock();
    }, [ticker]);

    if (!chartData) return <p>Loading Chart...</p>;

    return (
        <div style={{ width: "600px", height: "400px" }}>
            <Line data={chartData} />
        </div>
    )
};

export default StockChart;