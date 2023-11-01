import style from './buttonFooter.module.css';
import { useAppSelector, useAppDispatch } from '../../Api/Store';
import { fetchTickets } from '../../Api/FetchTickets';
import { selectStatus } from '../../Api/Slice';


function Footer() {

    const dispatch = useAppDispatch();

    const status = useAppSelector(selectStatus);

    const handleClick = () => dispatch(fetchTickets(5));

    return (
        <footer className={style.footer}>
            <button className={style.button} onClick={handleClick}>{status === "loading" 
                ? "Загрузка..." 
                : "Загрузить еще билеты"}</button>
        </footer>
    )
}

export default Footer;

