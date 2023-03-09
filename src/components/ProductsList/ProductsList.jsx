import { useSelector } from "react-redux";
import { selectProducts } from "redux/selectors";

const ProductsList = () => {
const products = useSelector(selectProducts())

const elements = products.map(({id, product, price}) => <li key={id}>
    <p>{product}:  {price}</p>
</li>);

    return <ul>{elements}</ul>
}

export default ProductsList;