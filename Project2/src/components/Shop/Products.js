import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
    { id: 'p1', price: 6, title: "My First Product", description: "My First Product" },
    { id: 'p2', price: 4, title: "My Second Product", description: "My Second Product" },
    { id: 'p3', price: 2, title: "My Third Product", description: "My Third Product" }
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
