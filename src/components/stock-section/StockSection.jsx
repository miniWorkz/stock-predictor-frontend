import StockChart from "./stock-chart/chart.jsx";

function StockSection({ticker, period}) {

    return (
        <div className={"flex flex-col w-[70vw] h-[95vh] items-center gap-4"}>
            <h1 className={"font-bold text-8xl p-10"}>{ticker}</h1>
            <StockChart ticker={ticker} period={period}></StockChart>
        </div>
    )
}

export default StockSection;