import styles from './Product.module.scss';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const productName = `${props.name[0].toUpperCase() + props.name.slice(1)} shirt`;

  const getPrice = useMemo(() => {
    const selectedSize = props.sizes.find(size => size.name === currentSize);
    return props.basePrice + selectedSize.additionalPrice;
  }, [props.basePrice, currentSize, props.sizes]);

  const handleAddToCart = () => {
    console.log("Summary");
    console.log("===============");
    console.log(`Product: ${productName}`);
    console.log(`Color: ${currentColor}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Price: ${getPrice()} $`);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{productName}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          currentColor={currentColor}
          setCurrentSize={setCurrentSize}
          setCurrentColor={setCurrentColor}
          handleAddToCart={handleAddToCart} />
      </div>
    </article>
  )
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
};

export default Product;