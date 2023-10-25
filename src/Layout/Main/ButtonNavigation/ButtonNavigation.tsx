import style from './buttonNavigation.module.css';

function ButtonNavigation() {
    return (
        <>
            <button className={style.button_cheap}>Самый дешевый</button>
            <button className={style.button_fast}>Самый быстрый</button>
            <button className={style.button_optimal}>Самый оптимальный</button>
        </>
    )
}

export default ButtonNavigation;