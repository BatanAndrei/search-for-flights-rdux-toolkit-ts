import style from './blockFilterTransfer.module.css';

function BlockFilterTransfer() {
    return (
        <div className={style.blockFilterTransfer}>
            <h2 className={style.titleFilter}>Количество пересадок</h2>
            <div className={style.positionCheckbox}>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox}/>
                    <span className={style.fake}></span>
                    <span>Без пересадок</span>
                </label>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox}/>
                    <span className={style.fake}></span>
                    <span>1 пересадка</span>
                </label>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox}/>
                    <span className={style.fake}></span>
                    <span>2 пересадки</span>
                </label>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox}/>
                    <span className={style.fake}></span>
                    <span>3 пересадки</span>
                </label>
            </div>
        </div>
    )
}

export default BlockFilterTransfer;