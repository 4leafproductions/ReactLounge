'use client';
import { useState } from 'react';
import styles from './contentswitcher.module.css'

const contentOptions = [{value: 'PDF', label: 'Books'},{value: 'RSS', label: 'Podcasts'}];
export default function Contentswitcher(props: any) {

  const [contentOption, setContentOption] = useState(contentOptions[0]);
  const menuItems = contentOptions.map((option: any) =>
    <div className={styles.option} key={option.value} data-index={option.value} onClick={props.onSwitch}>{option.label}</div>
    );

  return (
    <div className={styles.body}>
      <div className={styles.optionPicker}>
        {menuItems}
      </div>
    </div>
    
  )
}


