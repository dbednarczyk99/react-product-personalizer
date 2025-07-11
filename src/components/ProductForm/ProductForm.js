import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = ({ sizes, colors, currentSize, currentColor, setCurrentSize, setCurrentColor, handleAddToCart, prepareColorClass}) => {

    return (
        <form onSubmit={e => e.preventDefault()}>
          <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} prepareColorClass={prepareColorClass}/>
          <Button className={styles.button} onClick={() => handleAddToCart()}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    );
};

ProductForm.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            additionalPrice: PropTypes.number,
        })
    ).isRequired,
};

export default ProductForm;