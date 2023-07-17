'use client';
import styles from './tourbox.module.css'
import { useState } from 'react';

//this component surrounds a given component with the tour component for displaying explanations of each component
export default function Tourbox(props: any) {

  const [showBox, setShowBox] = useState(false);
  function tourHover(){
    if(props.tourMode){
      setShowBox(true);
    }
  }
  function tourUnhover(){
    setShowBox(false);
  }
  function TourText(){
    return(
      <div className={styles.tourText}> {props.tourText}</div>
    )
  }

  

  return (
    <div>
      <div className={props.tourMode ? (styles.tourBorder) : (styles.tourBorderNone)} onMouseEnter={tourHover}  onMouseLeave={tourUnhover}>
        {showBox && <TourText/>}
        {props.children}
        
      </div>
      
    </div>
  )
}


