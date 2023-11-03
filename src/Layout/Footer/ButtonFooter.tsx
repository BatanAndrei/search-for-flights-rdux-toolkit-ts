import style from './buttonFooter.module.css';
import { useAppSelector, useAppDispatch } from '../../Api/Store';
import { useEffect } from 'react';
import { fetchTickets } from '../../Api/FetchTickets';
import { selectStatus } from '../../Api/Slice';


function Footer() {

    const dispatch = useAppDispatch();

    const status = useAppSelector(selectStatus);
    
    useEffect(() => {
        dispatch(fetchTickets(3))
     }, [])

    return (
        <footer className={style.footer}>
            <button className={style.button}>{status === "loading" 
                ? "Загрузка..." 
                : "Загрузить еще билеты"}</button>
        </footer>
    )
}

export default Footer;

