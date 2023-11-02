import style from './main.module.css';
import ButtonsNavigation from './ButtonsNavigation/ButtonsNavigation';
import BlockFilterTransfer from './BlockFilterTransfer/BlockFilterTransfer';
import BlockFilterCompanies from './BlockFilterCompanies/BlockFilterCompanies';
import TicketsInfo from './TicketsInfo/TicketsInfo';
import { useAppSelector } from '../../Api/Store';
import { selectListTickets } from '../../Api/Slice';

function Main() {
    const listTickets = useAppSelector(selectListTickets);
    console.log(listTickets)

    return (
        <main className={style.block_main}>
            <div className={style.block_filters}>
                <BlockFilterTransfer />
                <BlockFilterCompanies />
            </div>
            <div className={style.block_info}>
                <div className={style.block_info__navigation}>
                    <ButtonsNavigation />
                </div>
                <div className={style.block_info__tickets}>
                    {listTickets.map((ticket) => <TicketsInfo key={ticket.id} company={ticket.company} from={ticket.from} to={ticket.to} currency={ticket.currency} price={ticket.price} startTime={ticket.startTime} endTime={ticket.endTime} duration={ticket.duration} transfers={ticket.transfers} />)}
                    {/* <TicketsInfo />
                    <TicketsInfo /> */}
                </div>
            </div>
        </main>
    )
}

export default Main;


