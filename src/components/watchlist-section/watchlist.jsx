import "./watchlist.css"
import Card from "./watchlist-card/card.jsx"

function Watchlist(){
    return(
        <section className={"border-r-2 h-[95vh] flex flex-col"}>
            <Card name={"Apple"} symbol={"APPL"} price={182.93}></Card>
            <Card name={"Meta"} symbol={"META"} price={38.27}></Card>
            <Card name={"JPMorgan"} symbol={"JPMG"} price={145.66}></Card>
            <Card name={"Chase Banking"} symbol={"CHS"} price={110.12}></Card>
            <Card name={"Amazon"} symbol={"AMZN"} price={293.87}></Card>
        </section>
    );
}

export default Watchlist;