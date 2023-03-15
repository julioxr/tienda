import { createContext, useState, useContext } from "react";
import ShoppingCart from "./shoppingCart";

const AppContext = createContext({
    isOpen: false,
    items: [],
    openCart: () => {},
    closeCart: () => {},
    addItemToCart: (item) => {},
    getNumberOfItems: () => {},
    filterItems: () => {},
});

export default function StateWrapper({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleOpenCart = () => {
        setIsOpen(true);
    };

    const handleCloseCart = () => {
        setIsOpen(false);
    };

    const handleAddItemToCart = (item) => {
        const temp = [...items];
        const found = temp.find((p) => p.id === item.id);

        if (found) {
            found.quantity++;
        } else {
            item.quantity = 1;
            temp.push(item);
        }

        setItems(temp);
    };

    const handleNumberOfItems = () => {
        const total = items.reduce((acc, item) => acc + item.quantity, 0);
        return total;
    };

    const handleFilterItems = (id) => {
        const res = items.filter((item) => item.id !== id);
        setItems(res);
    };

    const priceFormatter = (item) => {
        const price = item.price; // number 13000
        const priceWithDot = price.toLocaleString("es-US").replace(",", "."); // string 13.000
        return priceWithDot;
    };

    return (
        <AppContext.Provider
            value={{
                isOpen,
                items,
                openCart: handleOpenCart,
                closeCart: handleCloseCart,
                addItemToCart: handleAddItemToCart,
                getNumberOfItems: handleNumberOfItems,
                filterItems: handleFilterItems,
                setItems,
                priceFormatter,
            }}
        >
            {children}
            <ShoppingCart />
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
