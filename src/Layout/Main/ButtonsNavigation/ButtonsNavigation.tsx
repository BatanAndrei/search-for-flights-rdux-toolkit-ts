import style from './buttonsNavigation.module.css';

function ButtonsNavigation() {
   
    return (
        <>
            <button className={style.button+ ' ' +style.cheap}>Самый дешевый</button>
            <button className={style.button+ ' ' +style.fast}>Самый быстрый</button>
            <button className={style.button+ ' ' +style.optimal}>Самый оптимальный</button>
        </>
    )
}

export default ButtonsNavigation;