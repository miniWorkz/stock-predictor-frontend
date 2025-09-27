// import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Watchlist from "./components/watchlist-section/watchlist.jsx";

function App() {

  return (
    <div className={"flex flex-col"}>
        <Header></Header>
        <main>
            <Watchlist></Watchlist>
        </main>
    </div>


  )
}

export default App
