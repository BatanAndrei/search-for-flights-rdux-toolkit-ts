import style from './imgCompany.module.css';
import { Tpropse } from '../../Types/Types';

const IconCompany = ({ icon }: Tpropse) => {
    switch (icon) {
        case 'Pobeda':
            return (
                <div className={style.icon_pobeda}></div>   
            ) 
            case 'Redwings':
                return (
                    <img className={style.icon_redWings}></img>   
                )
            case 'Ssevenair':
            return (
                <img className={style.icon_sseven}></img>   
            )
           
          
        default:
            return null;
    }
}

export default IconCompany;