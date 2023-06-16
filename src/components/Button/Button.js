import css from './Button.module.css';

const Button = () => {
    return (
        <button type="submit" className={css.button__load}>Load more</button>
    )
}

export default Button;