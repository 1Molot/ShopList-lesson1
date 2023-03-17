import React from "react";
import {ShoppingListType} from "../Typisation";


export const ShoppingList = (props: ShoppingListType) => {
    const mappedGoods = props.goods.map(t => {
        return (
            <li key={t.id}>
                <div><b>{t.title}</b></div>
                <div>expectedPrise: {t.expectedPrise}</div>
                <div>realPrice: {t.realPrice}</div>
                <span>in basket: </span>
                <input type={'checkbox'} checked={t.inBasket}/>
            </li>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>add</button>
            </div>
            <ol>
                {mappedGoods}
            </ol>
            <div>
                <button>All</button>
                <button>Not to buy</button>
                <button>Bought</button>
            </div>
        </div>
    )
}

