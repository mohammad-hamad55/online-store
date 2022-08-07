import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const MY_PRODUCTS = [
  {
    id: 1,
    title: "test",
    price: 6,
    description: "This is a first test - amazing!",
    quantity: 1,
  },
  {
    id: 2,
    title: "book",
    price: 8,
    description: "This is a first book - amazing!",
    quantity: 1,
  },
  {
    id: 3,
    title: "dvd",
    price: 5,
    description: "This is a first dvd - amazing!",
    quantity: 1,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {MY_PRODUCTS.map((el) => (
          <ProductItem
            key={el.id}
            id={el.id}
            title={el.title}
            price={el.price}
            description={el.description}
            quantity={el.quantity}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
