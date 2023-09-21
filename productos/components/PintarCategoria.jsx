
import { Card } from './Card';
import { useCategoria } from '../hooks/useCategoria';

export const PintarCategoria = ({ categoria }) => {
    const { products, loading } = useCategoria(categoria);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <section>
            <h1>{categoria}</h1>
            {
                products.map((item) => 
                <Card key={item.id} {...item} />)
            }
        </section>
    );
};
