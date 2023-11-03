import style from './buttonFooter.module.css';
import { useAppSelector } from '../../Api/Store';
import { selectStatus } from '../../Api/Slice';


function Footer() {

    const status = useAppSelector(selectStatus);
    
    return (
        <footer className={style.footer}>
            <button className={style.button}>{status === "loading" 
                ? "Загрузка..." 
                : "Загрузить еще билеты"}</button>
        </footer>
    )
}

export default Footer;

