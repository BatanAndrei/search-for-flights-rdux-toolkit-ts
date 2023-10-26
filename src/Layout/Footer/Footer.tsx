import style from './footer.module.css';
import ButtonDownload from './ButtonDownload/ButtonDownload';

function Footer() {
    return (
        <footer className={style.footer}>
            <ButtonDownload />
        </footer>
    )
}

export default Footer;