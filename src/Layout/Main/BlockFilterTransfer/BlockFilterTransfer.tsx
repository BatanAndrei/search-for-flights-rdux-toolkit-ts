import style from './blockFilterTransfer.module.css';

function BlockFilterTransfer() {
    return (
        <div className={style.blockFilterTransfer}>
            <h2 className={style.titleFilter}>Количество пересадок</h2>
            <div className={style.positionCheckbox}>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox} />
                    <span className={style.fake}></span>
                    <span className={style.first_checkbox_text}>Без пересадок</span>
                </label>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox} />
                    <span className={style.fake}></span>
                    <span className={style.first_checkbox_text}>1 пересадка</span>
                </label>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox} />
                    <span className={style.fake}></span>
                    <span className={style.first_checkbox_text}>2 пересадки</span>
                </label>
                <label className={style.label}>
                    <input type="checkbox" className={style.checkbox} />
                    <span className={style.fake}></span>
                    <span className={style.first_checkbox_text}>3 пересадки</span>
                </label>
            </div>
        </div>
    )
}

export default BlockFilterTransfer;