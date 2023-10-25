import style from './footer.module.css';
import ButtonLoader from './ButtonLoader/ButtonLoader';

function Footer() {
    return (
        <footer className={style.footer}>
            <ButtonLoader />
        </footer>
    )
}

export default Footer;