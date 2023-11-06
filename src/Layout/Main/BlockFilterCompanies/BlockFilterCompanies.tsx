import style from './blockFilterCompanies.module.css';

function BlockFilterCompanies() {

    return (
        <div className={style.BlockFilterCompanies}>
            <h2 className={style.titleFilter}>Компании</h2>
            <div className={style.positionRadiobutton}>
                <label className={style.custom_radio}>
                    <input type="radio" name='company' value="pobeda"/>
                    <span>Победа</span>
                </label>
 
                <label className={style.custom_radio}>
                    <input type="radio" name='company' value="redwings"/>
                    <span>Red Wings</span>
                </label>
 
                <label className={style.custom_radio}>
                    <input type="radio" name='company' value="sevenairlines"/>
                    <span>S7 Airlines</span>
                </label>
            </div>
        </div>
    )
}

export default BlockFilterCompanies;