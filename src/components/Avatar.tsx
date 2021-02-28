import styles from '../styles/components/Avatar.module.css';

export function Avatar() {
    return (
        <div className={styles.container}>
            <img src="https://avatars.githubusercontent.com/u/13326193?s=400&u=e7c633dae86590744e3b151b843cdf677a3b1b18&v=4" alt="Helder Ribeiro" />
            <div>
                <strong>Helder Ribeiro</strong>
                <p>
                   <img src="icons/level.svg" alt="level"/> Level 1
                </p>
            </div>
        </div>
    );
}