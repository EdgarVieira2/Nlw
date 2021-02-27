import { useState,useEffect, useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownContext } from '../contexts/CountdownContext'
import styles from "../styles/components/Countdown.module.css"



export function Countdown(){

    const { minutes, 
            seconds,
            hasFinished,
            active,
            startCountdown,
            resetCountdown 
        } = useContext(CountdownContext)

    const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft,secondsRight] = String(seconds).padStart(2,'0').split('');

    

    
    return(
    <div>
        <div className={styles.CountdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondsLeft}</span>
                <span>{secondsRight}</span>
            </div>
            
        </div>

        { hasFinished ? (
             <button disabled className={styles.countdownButton} >
            
              ciclo encerrado
               
               
           </button>
        ): (
            <>
            { active ? (
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
            
            Abandonar ciclo
              
              
          </button>

        )  : (
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
        
             iniciar um ciclo
            
            
        </button>
        )}
</>
        )}

        
    </div>
    )
}