import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.notFound_wrapper}>
            <h2 className={styles.notFound_title}>
                Такой страницы не существует
            </h2>
            <Link to="/" className={styles.notFound_backHome}>
                Вернуться на главную
            </Link>
        </div>
    );
}
