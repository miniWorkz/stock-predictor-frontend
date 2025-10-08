import StockChart from "./stock-chart/chart.jsx";

function StockSection({ticker}) {

    return (
        <div className={"flex flex-col w-[70vw] h-[95vh] items-center border-2"}>
            <h1 className={"font-bold text-8xl p-10"}>{ticker}</h1>
            <StockChart ticker={ticker}></StockChart>
        </div>
    )
}

export default StockSection;