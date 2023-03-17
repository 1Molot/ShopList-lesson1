export type ShoppingListType = {
    title:string
    goods: GoodType[]
}

export type GoodType = {
    id:number
    title:string
    expectedPrise:string
    realPrice:string
    inBasket:boolean
}

