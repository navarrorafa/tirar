import { useProducto } from '../hooks/useProducto';

export const PintarProducto = () => {
    const { product, handleVolver} = useProducto();

    if (!product) return <p>Cargando...</p>;

    const { title, description, price, rating, thumbnail, category } = product;

    return (
        <section>
            <h1>Producto - {category}</h1>
            <button onClick={handleVolver}>Volver</button>
            <article>
                <div>
                    <img src={thumbnail} alt={title} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{price}$</p>
                <p>{rating}</p>
            </article>
        </section>
    );
};

