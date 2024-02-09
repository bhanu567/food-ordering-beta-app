import React from "react";

const AuthContext = React.createContext({
    noOfItemsInCart : 0,
    itemList : [],
    totalPrice : 0,
    increaseNoOfItemsInCart : (x, y)=>{},
})
export default AuthContext;