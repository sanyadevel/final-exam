import type { FC } from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

export const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.container}>
            <div className={styles.leftPart}>
                <div className={cn(styles.name, styles.title)}>Ystorage</div>
                <div className={styles.name}>Бешляга Валентин</div>
                <div className={styles.tag}>
                    <a href="https://t.me/vbeshleaga" target="_blank" rel="noopener noreferrer">@vbeshleaga</a>
                </div>
                <div className={styles.tag}>БПИ-22-5</div>
                <div>©️{currentYear} Ystorage. Все права защищены</div>
            </div>

            <div className={styles.center}>
                <div className={cn(styles.name, styles.title)}>&nbsp;</div>
                <div className={styles.name}>Ри Дю Ен</div>
                <div className={styles.tag}>
                    <a href="https://t.me/zaykarii" target="_blank" rel="noopener noreferrer">@zaykarii</a>
                </div>
                <div className={styles.tag}>БПИ-22-5</div>
            </div>

            <div className={styles.rightPart}>
                <div className={cn(styles.name, styles.title)}>&nbsp;</div>
                <div className={styles.name}>Ле Куи Зыонг</div>
                <div className={styles.tag}>
                    <a href="https://t.me/t_eruwiqjs" target="_blank" rel="noopener noreferrer">@t_eruwiqjs</a>
                </div>
                <div className={styles.tag}>БПИ-22-5</div>
            </div>
        </div>
    )
}