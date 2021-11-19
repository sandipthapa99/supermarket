import React, { createContext, useContext,useReducer } from 'react'
import Data from '../components/data/Data';
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({children}) => {
    const {advertised1,advertised2,today1,today2} = Data;

    const [state, dispatch] = useReducer(cartReducer, {
        a1:advertised1,
        a2:advertised2,
        t1:today1,
        t2:today2,
        cart:[]
    });

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    );
}

export default Context

export const CartState=()=>{
    return useContext(Cart);
}