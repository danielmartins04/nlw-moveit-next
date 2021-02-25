import styles from '../styles/components/CountDown.module.css';
import { CountDownContext } from '../contexts/CountDownContext';

import { FaPlay } from 'react-icons/fa';
import { ImCancelCircle } from 'react-icons/im';
import { MdDoneAll } from 'react-icons/md';
import { useContext } from 'react';

export function CountDown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountDown, 
        resetCountDown 
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado <MdDoneAll className={styles.finishedCycle} />
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
                            onClick={resetCountDown}
                        >
                            Abandonar ciclo <ImCancelCircle className={styles.cancelCycle} />
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton} 
                            onClick={startCountDown}
                        >
                            Inciar um ciclo <FaPlay className={styles.playCycle} />
                        </button>
                    ) }
                </>
            ) } 
        </div>
    );
}