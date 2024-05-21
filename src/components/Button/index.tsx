import styles from './styles.module.scss';
import type { FC } from 'react';
import downloadIcon from '../../assets/download.svg';

interface Props {
    link: string;
}

export const Button: FC<Props> = ({ link }) => {
    return (
        <a href={link} download className={styles.container}>
            <span>Подробнее</span>
            <img src={downloadIcon} alt="" />
        </a>
    )
}