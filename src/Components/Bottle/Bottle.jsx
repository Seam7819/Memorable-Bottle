
const Bottle = ({bottle,handleBottles}) => {

    const {name,img, price} = bottle

    return (
        <div>
            <div className="mb-2">
            <h2 className="text-2xl font-bold mb-3">Bottle Name: {name} </h2>
            <img src={img} alt="" />
            <p>Bottle Price : {price}</p>
            </div>
            <button onClick={()=>handleBottles(bottle)} className="text-stone-50 bg-yellow-300 p-3">Add To Cart</button>
        </div>
    );
};

export default Bottle;