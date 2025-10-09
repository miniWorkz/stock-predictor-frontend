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
    Filler,
} from "chart.js";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

const StockChart = ({ticker, period}) => {
    const [chartData, setChartData] = useState({});
    useEffect(() => {
        const fetchStock = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/stock/${ticker}?period=${period}`);
                console.log('API Response:', res.data);

                setChartData({
                    labels: res.data.dates,
                    datasets: [
                        {
                            borderWidth: 1,
                            label: `${ticker} Price`,
                            data: res.data.prices,
                            borderColor: "rgb(33,255,0)",
                            fill: true,
                            tension: 0,
                            pointRadius: 0,
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                const {ctx, chartArea} = chart;

                                if (!chartArea){
                                    return null;
                                }
                                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                                gradient.addColorStop(0, "rgba(33,255,0,0.25)");
                                gradient.addColorStop(0.5, "rgba(33,255,0,.1)");
                                gradient.addColorStop(1, "rgba(33,255,0,0)");
                                return gradient;
                            }
                        }
                    ]
                });
            } catch (error) {
                console.error("Failed to fetch or process chart data. Error:", error);
            }
        };
        fetchStock();
    }, [ticker, period]);

    const options = {
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return '$' + value;
                    }
                }
            },
            x: {
                ticks: {
                    callback: function(value, index) {
                        if (index === 0 || index === Math.floor(this.getLabels().length / 2) || index === this.getLabels().length - 1) {
                            const label = this.getLabels()[index];
                            const date = new Date(label);
                            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        }
                        return null;
                    }
                }
            },
        }
    };

    if (!chartData.datasets) {
        return <p>Loading Chart...</p>;
    }

    return (
        <div style={{ width: "900px", height: "700px" }}>
            <Line data={chartData} options={options} />
        </div>
    )
};

export default StockChart;