import Button from '../Button/Button';
import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({colors, currentColor, setCurrentColor}) => {

    const prepareColorClass = color => {
        return styles['color' + color[0].toUpperCase() + color.slice(1)];
    };
    // console.log(prepareColorClass(colors[0]));
    // console.log(colors[0]);
    // colors.map(item => console.log(item));

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {colors.map(item => <li key={item}>
                    <Button onClick={() => setCurrentColor(item) } className={clsx(prepareColorClass(item), item === currentColor && styles.active)}></Button>
                </li>)}
            </ul>
        </div>
    );
};

OptionColor.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OptionColor;