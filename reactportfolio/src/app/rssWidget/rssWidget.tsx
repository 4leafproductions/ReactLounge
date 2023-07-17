import { useState } from 'react';
import styles from './rssWidget.module.css'
import { getData } from '../rssDas';

//this component takes a URL and displays a playable audio for the corresponding podcast - must be the format NPR uses for the feed to properly display as a widget
export default function RSSWidget(props: any) {

  //all the fields needed to render the widget
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pubdate, setPubDate] = useState('');
  const [audio, setAudio] = useState('');
  let items: any = null;
  const data = getData(props.url).then(results =>{
    let url = results.items[0]?.enclosure?.url;
    let urlDefault = url ? url : '';
    //format the date to something user-friendly
    let date = new Date(results.items[0].pubDate);
    setPubDate(date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}));
    setAudio(urlDefault);
    setTitle(results.title);
    setDescription(results.description);
  });

  //create the audio source for this podcast
  function AudioClip(){
    return(
      <audio controls>
          <source src={audio} type="audio/mp3"/>
        Your browser does not support the audio element.
        </audio> 
    )
  }



    return(
      <div className={styles.rssWidget}>
        <h1>{title}</h1>
        <span className={styles.description}>{description}</span>
        <hr className={styles.divider}/>
        <div className={styles.option} key={pubdate}>{pubdate}</div>
        <AudioClip/>
      </div>
    )
}


