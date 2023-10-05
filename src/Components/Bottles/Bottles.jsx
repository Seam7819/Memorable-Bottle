import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] =useState([])

    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res => res.json())
        .then (data => setBottles(data))
    },[])

    const handleBottles = bottle => {
        const newBottle = [...cart, bottle]
        setCart(newBottle)
    }

    return (
        
        <div >
            <p className="mt-10 text-3xl mb-10">Display All Bottles</p>
            <p>Bottle Added : {cart.length}</p>
            
            <div className="grid grid-cols-3 gap-4"> 
            {
                bottles.map(bottle => <Bottle handleBottles={handleBottles} bottle={bottle} key={bottle.id}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;