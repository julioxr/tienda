import { createContext, useState, useContext } from "react";

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
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleOpenCart = () => {
        setIsCartOpen(true);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
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
        const priceWithDot = price.toLocaleString("es-AR"); // string 13.000
        return priceWithDot;
    };

    return (
        <AppContext.Provider
            value={{
                isCartOpen,
                items,
                openCart: handleOpenCart,
                closeCart: handleCloseCart,
                addItemToCart: handleAddItemToCart,
                getNumberOfItems: handleNumberOfItems,
                filterItems: handleFilterItems,
                setItems,
                priceFormatter,
                setIsCartOpen,
                isMenuOpen,
                setIsMenuOpen,
                handleOpenMenu,
                handleCloseMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
