import "./watchlist.css"
import Card from "./watchlist-card/card.jsx"

function Watchlist(){
    return(
        <section className={"border-r-2 h-[94.5vh] flex flex-col"}>
            <Card name={"Apple"} symbol={"APPL"} price={182.93}></Card>
            <Card name={"Amazon"} symbol={"AMZN"} price={293.87}></Card>
            <Card name={"Amazon"} symbol={"AMZN"} price={293.87}></Card>
            <Card name={"Amazon"} symbol={"AMZN"} price={293.87}></Card>
            <Card name={"Amazon"} symbol={"AMZN"} price={293.87}></Card>
        </section>
    );
}

export default Watchlist;