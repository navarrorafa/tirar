// hooks/useProducto.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../helpers/getProductById';

export const useProducto = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchProduct = async () => {
        const data = await getProductById(id);
        setProduct(data);
    };

    useEffect(() => {
      
        fetchProduct();
    }, [id]);

    const handleVolver = () => {
        navigate(-1);
    };

    return { product, handleVolver };
};
