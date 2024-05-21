import type { FC } from 'react';
import styles from './styles.module.scss';
import { Button } from '../Button';

interface Props {
    img: string;
    title: string;
    description: string;
    link: string;
}

export const BigCard: FC<Props> = ({ img, title, description, link }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src={img} alt="" />
            </div>

        
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.button}>
                    <Button link={link} />
                </div>
        
        </div>
    )
}