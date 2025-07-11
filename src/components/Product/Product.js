import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const productName = `${props.name[0].toUpperCase() + props.name.slice(1)} shirt`;
  
  const prepareColorClass = color => {
    return styles['color' + color[0].toUpperCase() + color.slice(1)];
  };

  const getPrice = () => {
    const selectedSize = props.sizes.find(size => size.name === currentSize);
    return props.basePrice + selectedSize.additionalPrice;
  };

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${props.title} shirt`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{productName}</h2>
          <span className={styles.price}>Price: {getPrice()} $</span>
        </header>
        <form onSubmit={e => e.preventDefault()}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(item => <li key={item.name}>
                <Button onClick={() => setCurrentSize(item.name)} className={clsx(item.name === currentSize && styles.active)}>{item.name}</Button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(item => <li key={item}>
                <Button onClick={() => setCurrentColor(item) } className={clsx(prepareColorClass(item), item === currentColor && styles.active)}></Button>
              </li>)}
            </ul>
          </div>
          <Button className={styles.button} onClick={() => handleAddToCart()}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
};

export default Product;