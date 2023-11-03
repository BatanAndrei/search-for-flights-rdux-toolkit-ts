import style from './main.module.css';
import ButtonsNavigation from './ButtonsNavigation/ButtonsNavigation';
import BlockFilterTransfer from './BlockFilterTransfer/BlockFilterTransfer';
import BlockFilterCompanies from './BlockFilterCompanies/BlockFilterCompanies';
import TicketsInfo from './TicketsInfo/TicketsInfo';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../Api/Store';
import { fetchTickets } from '../../Api/FetchTickets';
import { selectListTickets } from '../../Api/Slice';
import { selectStatePrams } from '../../Api/Slice';

function Main() { 

    const stateParams = useAppSelector(selectStatePrams);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTickets(stateParams))
    }, [stateParams])

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
                    {listTickets.map((ticket) => <TicketsInfo key={ticket.id} id={ticket.id} company={ticket.company} from={ticket.from} to={ticket.to} currency={ticket.currency} price={ticket.price} startTime={ticket.startTime} endTime={ticket.endTime} duration={ticket.duration} transfers={ticket.transfers} />)}
                </div>
            </div>
        </main>
    )
}

export default Main;


