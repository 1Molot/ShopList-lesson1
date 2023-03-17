import React from 'react';
import './App.css';
import {ShoppingList} from "./components/ShoppingList";

function App() {

    const goods = [
        {id: 1,title: "Milk",expectedPrise: "$1.99", realPrice:"$1.99",inBasket:true},
        {id: 2,title: "Bread",expectedPrise: "$0.99", realPrice:"$1.99",inBasket:false},
        {id: 3,title: "Coca-COla",expectedPrise: "$1.49", realPrice:"$1.99",inBasket:false},
        {id: 4,title: "Eggs",expectedPrise: "$2.49", realPrice:"$1.99",inBasket:true}
    ]
    const goods2 = [
        {id: 1 ,title: "Milk",expectedPrise: "$1.99", realPrice:"$1.99",inBasket:true},
        {id: 2 ,title: "Bread",expectedPrise: "$0.99", realPrice:"$1.99",inBasket:false},
        {id: 3 ,title: "Coca-COla",expectedPrise: "$1.49", realPrice:"$1.99",inBasket:false},
        {id: 4,title: "Eggs",expectedPrise: "$2.49", realPrice:"$1.99",inBasket:true}
    ]

    return (
        <div className="App">
            <ShoppingList title={"What to buy"} goods={goods}/>
            <ShoppingList title={"What to buy today"} goods={goods}/>
        </div>
    );
}

export default App;