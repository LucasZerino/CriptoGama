import React, { createContext, useContext, useEffect, useState } from "react";
import { create } from "ts-node";

const CriptoGama = createContext();

const CryptoMoeda = ({ children }) => {
    const [moeda, setMoeda] = useState('BRL');
    const [simbolo, setSimbolo] = useState('R$');

    useEffect(() => {
        if(moeda ==='BRL') setSimbolo('R$');
        else if(moeda ==='USD') setSimbolo('$');
    }, [moeda]);

    return(
        <CryptoMoeda.Provider value={{ moeda, setMoeda, simbolo}}>
            {children}
        </CryptoMoeda.Provider>
    )
}

export default CryptoMoeda;

export const CryptoEstado = () => {
    return useContext(CriptoGama);
}