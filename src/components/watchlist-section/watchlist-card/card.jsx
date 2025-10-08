

function Card({symbol, name, price}){
    return(
            <div className={"flex-grow p-3 border-b-2 flex flex-col justify-around"}>
                <h1 className={"text-center text-3xl font-bold"}>{symbol}</h1>
                <h2 className={"text-center m-[0 0 1rem 0]"}>{name}</h2>
                <h3 className={"text-center text-2xl font-semibold"}>${price}</h3>
            </div>
    );
}

export default Card;