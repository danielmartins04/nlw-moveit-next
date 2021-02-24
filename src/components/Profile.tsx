import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/danielmartins04.png" alt="Daniel Martins" />
            <div>
                <strong>Daniel Martins</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level 1
                </p>
            </div>
        </div>
    );
}