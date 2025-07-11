import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {

    const handleClick = (e) => {
      if (props.onClick) {
        e.preventDefault(); 
        props.onClick(e);
      };
    }

    return (<button type="button" onClick={handleClick} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

export default Button;