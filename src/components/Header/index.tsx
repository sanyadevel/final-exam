import type { FC } from 'react';
import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

export const Header: FC = () => {
    return (
        <div className={styles.container}>
            <a href="/">
                <img src={logo} alt="" />
            </a>
        </div>
    )
};
