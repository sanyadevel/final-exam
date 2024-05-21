import type { FC } from 'react';
import styles from './styles.module.scss';

export const Title: FC = () => {
    return (
        <>
            <h1 className={styles.title}>Информационная безопасность</h1>
            <div className={styles.description}>
                <div className={styles.item}>БПИ-22-5</div>
                <div className={styles.item}>2024</div>
                <div className={styles.item}>МИСИС</div>
            </div>
        </>
    )
}