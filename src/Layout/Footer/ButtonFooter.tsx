import style from './buttonFooter.module.css';

function Footer() {
    return (
        <footer className={style.footer}>
            <button className={style.button}>Загрузить еще билеты</button>
        </footer>
    )
}

export default Footer;