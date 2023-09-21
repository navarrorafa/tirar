
import { Link } from 'react-router-dom';

export const Card = ({ title, rating, thumbnail, id, price}) => {
    return (
        <article>
            <div>
                <img src={thumbnail} alt={title} />
            </div>
            <p>{title}</p>
            <p>{price}$</p>
            <p>{rating}</p>
            <Link to={`/producto/${id}`}>Saiba Mais</Link>
        </article>
    );
};
