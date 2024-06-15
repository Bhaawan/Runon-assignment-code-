// context/VariantContext.js
import React, { createContext, useState, useContext } from 'react';

const VariantContext = createContext();

const VariantProvider = ({ children }) => {
    const [variants, setVariants] = useState([]);

    const addVariant = (variant) => {
        setVariants([...variants, variant]);
    };

    const updateVariant = (index, variant) => {
        const newVariants = [...variants];
        newVariants[index] = variant;
        setVariants(newVariants);
    };

    return (
        <VariantContext.Provider value={{ variants, addVariant, updateVariant }}>
            {children}
        </VariantContext.Provider>
    );
};

const useVariantContext = () => {
    const context = useContext(VariantContext);
    if (!context) {
        throw new Error("useVariantContext must be used within a VariantProvider");
    }
    return context;
};

export { VariantProvider, useVariantContext };
