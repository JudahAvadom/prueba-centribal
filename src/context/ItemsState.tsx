import { useReducer } from "react";

import ItemsContext from "./itemsContext";
import ItemsReducer from "./ItemsReducer";

const ItemsState = ({children}) => {
    const initialState = {
        counter: 0,
        list: []
    };
    const [state, dispatch] = useReducer(ItemsReducer, initialState);
    const setCounter = () => {
        const data = localStorage.getItem("countProducts")
        try {
            dispatch({ type: "SET_COUNTER", payload: data });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <ItemsContext.Provider
            value={{
                counter: state.counter,
                setCounter
            }}
        >
            {children}
        </ItemsContext.Provider>
    )
}

export default ItemsState
