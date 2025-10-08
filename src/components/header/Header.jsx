import "./header.css"

function Header(){
    // const searchButton = document.getElementById("search-button");
    // const searchBar = document.getElementById("search-bar");

    const handleSearch = () => {
        console.log(`Search initiated`);
    }

    return(
        <div className="border-b-2 border-white h-[5vh] w-[100vw] flex items-center justify-center gap-2">
            <img id={"search-button"} onClick={() => handleSearch()} className={"h-8 w-8 hover:cursor-pointer"} src="/magnifier.svg" alt="Magnifying Glass"/>
            <input type="text" id={"search-bar"} className={"p-2 w-[30rem] border-white bg-[#171717] text-gray-400 rounded-2xl border-2 h-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:transition-all"} />
        </div>
    )
}

export default Header;