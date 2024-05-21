import { cards } from './cards';
import { Card } from '../Card';
import { bigCards } from './bigCards';
import { BigCard } from '../BigCard';
import type { FC } from 'react';
import styles from './styles.module.scss';

export const Cards: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.miniCards}>
                {cards.map(card => {
                    return (
                        <div className={styles.miniCard}>
                            <Card img={card.img} title={card.title} description={card.description} link={card.link} />
                        </div>
                    )
                })}
            </div>

            <div className={styles.bigCards}>
                {bigCards.map(card => {
                    return (
                        <div className={styles.bigCard}>
                            <BigCard title={card.title} img={card.img} description={card.description} link={card.link} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}