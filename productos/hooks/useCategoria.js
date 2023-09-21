import { useState, useEffect } from 'react';
import { getCategoria } from '../helpers/getCategoria';

export const useCategoria = (categoria) => {
    const [data, setData] = useState({
        products: [],
        loading: true
    });

    const fetchCategoria = async () => {
        const products = await getCategoria(categoria);
        setData({
            products,
            loading: false
        });
    };

    useEffect(() => {
    
      fetchCategoria();
    }, [categoria]);

    return data;
};



