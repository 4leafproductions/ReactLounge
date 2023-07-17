'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Tourbox from './tourbox/tourbox'
import Viewer from './viewer/viewer'
import Library from './library/library'
import Banner from './banner/banner'
import { Cinzel } from 'next/font/google'
import Tourswitch from './tourswitch/tourswitch'
import { useState } from 'react';
import Contentswitcher from './contentswitcher/contentswitcher'
import RSSWidget from './rssWidget/rssWidget'

const cinzel = Cinzel({ weight: '500',subsets: ['latin'] });
const linkedin = 'https://www.linkedin.com/in/andrew-fowler-99a2468a/';
const github = 'https://github.com/4leafproductions/AndrewCreativeCommons/tree/main';
export default function Home() {
  const [isTourMode, setIsTourMode] = useState(false);
  const [pdfActive, setPDFActive] = useState(false);
  const [podActive, setPodActive] = useState(true);
  const [activeBook, setActiveBook] = useState('Frankenstein');

  function switchContent(event: any){
    let content = event.target.getAttribute("data-index");
    if('RSS' === content){
      setPDFActive(false);
      setPodActive(true);
    }else{
      setPDFActive(true);
      setPodActive(false);
    }
    console.log(event.target.getAttribute("data-index"))
  }
  function tourMode(event: any){
    console.log('tour switch event: ',event.target.checked);
    setIsTourMode(event.target.checked);
  }

  function pickBook(key: any){
    setActiveBook(key);
    console.log('something got clicked',key);
  }

  return (
    <main className={styles.main}>
        <Tourswitch tourMode={tourMode}/>

      
      <Banner></Banner>
      
      <Tourbox tourMode={isTourMode} tourText = "The Banner component is a reactive header to the site. It uses media queries to size appropriately for ranges from 4k to mobile. The bookshelf image is from my living room -- shot on a Nikon Z6 and edited in Adobe Photoshop to give a subdued background feel. The font is Cinzel from Google.">
        <div className={styles.description}>
          <h1 className={cinzel.className}>Andrew&apos;s Listening & Reading Lounge</h1>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built with React and{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={80}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </Tourbox>
      <Contentswitcher onSwitch={switchContent}/>
      {podActive && <>
        <Tourbox tourMode={isTourMode} tourText = "These podcasts are made available by NPR's public RSS feeds. They will stay up to date with the most recent episode released via the feed. A call to this external data needs to go through a proxy running on a Heroku app. This helps the browser avoid a CORS Cross-Site Origin error.">
        <RSSWidget url="https://feeds.npr.org/500005/podcast.xml"/>
        <RSSWidget url="https://feeds.npr.org/510200/podcast.xml"/>
        </Tourbox>
      </>}
      {pdfActive && <>
        <span className={styles.pdfWarning}>Some mobile browsers don&apos;t display PDFs well. Consider a podcast instead!</span>
        <Tourbox tourMode={isTourMode} tourText = "This is the embedded PDF Viewer. The Viewer component accepts a property called file. Passing this property the name of any PDF switches the iframe viewer contents to that file.">
          <Viewer tourMode={isTourMode} file={activeBook}></Viewer>
        </Tourbox>
      </>}
      

      <Tourbox tourMode={isTourMode} tourText = "These links will open a new tab and provide some additional insight on myself, as well as the technology used to build this application.">
        <div className={styles.grid}>
          
          <a
            href={linkedin}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              LinkedIn <span>-&gt;</span>
            </h2>
            <p>For more information about my skillset or to reach out, take a look at my profile on LinkedIn.</p>
          </a>

          <a
            href={github}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Github <span>-&gt;</span>
            </h2>
            <p>The code for this application is publicly available on Github! Please feel free to take a look around.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Next.js <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course.</p>
          </a>

          

          <a
            href="https://firebase.google.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Firebase <span>-&gt;</span>
            </h2>
            <p>
              This web application is built on React and Next, and deployed with Google Firebase.
            </p>
          </a>
        </div>
      </Tourbox>
    </main>
  )
}
