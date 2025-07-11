import Button from '../Button/Button';
import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map(item => <li key={item.name}>
                    <Button onClick={() => setCurrentSize(item.name)} className={clsx(item.name === currentSize && styles.active)}>{item.name}</Button>
                </li>)}
            </ul>
        </div>
    );
};

OptionSize.propTypes = {
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          additionalPrice: PropTypes.number,
        })
      ).isRequired,
};

export default OptionSize;