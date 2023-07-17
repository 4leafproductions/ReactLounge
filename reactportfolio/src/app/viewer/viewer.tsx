'use client';
import styles from './viewer.module.css'
import { useState } from 'react';
import Library from '../library/library';
import Tourbox from '../tourbox/tourbox';

//any books added to the public/files folder need to be added here to show up in the dropdown
const libraryIndex = 
[{name: 'Frankenstein', title: 'Frankenstein', author: 'Mary Shelly'},
{name: '1984', title: '1984', author: 'George Orwell'},
{name: 'greatExpectations', title: 'Great Expectations', author: 'Charles Dickens'},
{name: 'christmasCarol', title: 'A Christmas Carol', author: 'Charles Dickens'},
{name: 'gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'}];

export default function Viewer(props: any) {

  const [activeBook, setActiveBook] = useState(getBookByKey('Frankenstein'));
  //dynamically builds the src path for each PDF
  function getFile(){
    return '/files/'+activeBook?.name +'.pdf';
  }

  function pickBook(key: any){
    setActiveBook(getBookByKey(key));
  }
  function getBookByKey(key: any){
    return libraryIndex.find(({ name }) => name === key);
  }

  return (
    <div className={styles.viewer}>
      <Tourbox tourMode={props.tourMode} 
      tourText="This toolbar and dropdown menu use React's state and props functionality to choose the active book. Books are indexed as objects with a name, title, and author. The dropdown is powered by Next UI -- picking a file name passes it to the Viewer component, which loads the PDF into the iframe.">
        <div className={styles.header}>
            <Library libraryIndex={libraryIndex} pickBook={pickBook}/>
          <span className={styles.title}>{activeBook?.title}</span>
          <span className={styles.author}>{activeBook?.author}</span>
        </div>
      </Tourbox>
      <iframe src={getFile()} width="100%" height="900px"></iframe>
    </div>
  )
}


