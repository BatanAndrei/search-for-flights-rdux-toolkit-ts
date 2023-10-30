import style from './ticketsInfo.module.css';
import SvgPobeda from '../../Svg/SvgPobeda';
import { useTypedSelector, useAppDispatch } from "../../../Api/Store";
import { fetchTickets } from '../../../Api/FetchTickets';
import { selectStatus } from '../../../Api/Slice';
//import SvgSsevenAir from '../../Svg/SvgSsevenAir'; 
//import SvgRedWings from '../../Svg/SvgRedWings';
//import IconCompany from '../../IconCompany/IconCompany';

function TicketsInfo() {
    
        const dispatch = useAppDispatch();

        const status = useTypedSelector(selectStatus);

        const handleClick = () => dispatch(fetchTickets(1));

    return (
        <div className={style.ticket}>
            <div className={style.ticketInfoTop}>
                <div className={style.ticketInfoPrice}>25 000 P</div>
                <div className={style.ticketInfoCompany}><SvgPobeda  /></div>
            </div>
            <div className={style.ticketInfoBottom}>
                <div className={style.ticketInfoTime}>
                    <h2 className={style.infoTextTitle}>SVO - LED</h2>
                    <h3 className={style.infoTextData}>00:00 - 00:00</h3>
                </div>
                <div className={style.ticketInfoDurationFlight}>
                    <h2 className={style.infoTextTitle}>В пути</h2>
                    <h3 className={style.infoTextData}>0 ч 00 мин</h3>
                </div>
                <div className={style.ticketInfoTransfers}>
                    <h2 className={style.infoTextTitle}>Пересадки</h2>
                    <h3 className={style.infoTextData}>Без пересадок</h3>
                </div>
            </div>
            <button type="button" onClick={handleClick}>
                {status === "loading" 
                    ? "Loading tickets..." 
                    : "Load tickets"}
            </button>
            <p>{status}</p>
        </div>
    )
}

export default TicketsInfo;