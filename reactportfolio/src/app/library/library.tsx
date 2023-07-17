'use client';
import { useState } from 'react';
import { Dropdown } from "@nextui-org/react";
import styles from './library.module.css'
//this component houses the "library" - the collection of PDFs available from public/files directory
export default function Library(props: any) {

  const [showBox, setShowBox] = useState(false);
  const menuItems = props.libraryIndex.map((book: any) =>
    <Dropdown.Item key={book.name}>{book.title}</Dropdown.Item>
    );


  return (
    <div>
      <Dropdown>
        <Dropdown.Button className={styles.menu}>Choose a Book</Dropdown.Button>
        <Dropdown.Menu onAction={props.pickBook}>
          {menuItems}
        </Dropdown.Menu>
      </Dropdown>    
    </div>
    
  )
}


