import clouds from './../../assets/video.mp4';
import { useEffect, useState } from 'react';
import './Home.css';

const TypingEffect = ({ targetText }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(targetText.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [targetText, setText]);

  return <h2>{text}</h2>;
};

export function Home() {
  return (
    <>
      <div className="myHome">
        <div className='overlay'></div>
        <video src={clouds} autoPlay loop muted></video>
        <div className='content'>
          <h1>Amina Rajab</h1>
          <TypingEffect targetText="Software Engineer" />
          {/* <h6>Based in Kenya</h6> */}
          <a className=' btn btnWelcome' href="#About">Welcome  <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"/>
            </svg></span>
          </a>
        </div>
      </div>
    </>
  );
}
