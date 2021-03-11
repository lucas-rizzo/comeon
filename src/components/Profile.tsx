import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucas-rizzo.png" alt="Lucas Rizzo"/>
            <div>
                <strong> Lucas Rizzo</strong>
                <p> 
                    <img src="icons/level.svg" alt="Level"/> 
                    Lvl {level}
                </p>
            </div>
        </div>
    );
}