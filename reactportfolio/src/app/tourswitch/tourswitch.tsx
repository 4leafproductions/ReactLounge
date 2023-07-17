'use client'
import styles from './tourswitch.module.css'
import { Switch } from "@nextui-org/react";
import { useState } from 'react';
//this component turns the technical tour on and off, as well as displays the initial modal.
export default function Tourswitch(props: any) {


  const [switchClicked, setSwitchClicked] = useState(false);
  const  css={
    color: 'goldenrod',
    '&:active': {
      background: 'goldenrod',
    },
    
  }
  const modalText = "Thanks for turning on the Technical Tour! I want this site to demonstrate both my technical and communication skills, so I created a Tourbox component to wrap all the features I'm happy with. When Technical Tour mode is on, mousing over any of these features will display some insightful text about what it does or how it was created. The Tourbox component works by accepting child components as a property and wrapping them in the tour components before React parses the JSX onto the page.";
  function showModal(event: any){
    if(event.target.checked){
      setSwitchClicked(true);
    }
    props.tourMode(event);
  }
  function closeModal(){
    console.log('mouse down event');
    setSwitchClicked(false);
  }
  return (
    <div className={styles.row}>
      <span>Technical Tour</span> <Switch  css={css} onChange={showModal}/>
      {switchClicked && 
      <div onMouseDown={closeModal} className={styles.overlay}>
        <div className={styles.overlayScreen}></div>
        <div className={styles.modal}>{modalText}</div>
      </div>
      }
    </div>
    
  )
}


