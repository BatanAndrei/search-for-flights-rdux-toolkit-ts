import { TpropseTickets } from '../Types/Types';
import style from './globalSvg.module.css';

const GlobalSvg = ({ company }: any) => {
    switch (company) {
        case 'Pobeda':
            return (
                <div className={style.pobeda}></div>   
            ) 
            case 'Redwings':
                return (
                    <div className={style.redwings}></div>   
                )
            case 'Ssevenair':
            return (
                <div className={style.ssevenair}></div>   
            )
        default:
            return null;
    }
}

export default GlobalSvg;