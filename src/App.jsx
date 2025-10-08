// import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Watchlist from "./components/watchlist-section/watchlist.jsx";
import StockChart from './components/stock-section/StockSection.jsx';

function App() {

  return (
    <div className={"flex flex-col"}>
        <Header></Header>
        <main className="flex flex-row">
            <Watchlist></Watchlist>
            <StockChart ticker={"AAPL"}></StockChart>
        </main>
    </div>


  )
}

export default App
