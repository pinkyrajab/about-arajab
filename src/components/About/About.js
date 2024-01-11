import './About.css'
import img from './../../assets/Hemmingways1.jpeg'
import { useEffect, useState } from 'react';

const TypingEffect = ({ targetTexts }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState(targetTexts[0]);
    const [showCursor, setShowCursor] = useState(true);
  
    useEffect(() => {
      let currentIndex = 0;
  
      const intervalId = setInterval(() => {
        setText(targetTexts[textIndex].slice(0, currentIndex + 1));
        currentIndex++;
  
        if (currentIndex === targetTexts[textIndex].length) {
          clearInterval(intervalId);
          setTimeout(() => {
            // Delay before starting the typing again
            setText('');
            currentIndex = 0;
  
            // Switch to the next text
            setTextIndex((prevIndex) => (prevIndex === targetTexts.length - 1 ? 0 : prevIndex + 1));
          }, 1000);
        }
      }, 100);
  
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
  
      return () => {
        clearInterval(intervalId);
        clearInterval(cursorInterval);
      };
    }, [targetTexts, textIndex, setText, setShowCursor]);
  
    const containerStyle = {
      height: '40px', // Adjust the height as needed
    };
    return (
        <div style={containerStyle}>
          <h5 style={{ color: '#bbb', display: 'inline',fontSize:"15px" ,marginTop:"2px"}}>{text}</h5>
          {showCursor && <span style={{ color: '#bbb', marginLeft: '2px' }}>|</span>}
        </div>
      );
    };
  
export function About(){
    const targetTexts = ['Full Stack Engineer', 'Self-motivated', 'Attention to detail', 'Values Teamwork'];
    
    return(
      <>
        {targetTexts && <TypingEffect targetTexts={targetTexts} />}
        
        <div className='container-fluid about_text'>
            <div className='row'>
                <div className='col-8'><hr style={{marginBottom:"14px"}}></hr>
                    <p>
                    Hi, my name is Amina Rajab.
                    Welcome to my corner of the digital universe! I'm a passionate and versatile Full Stack Developer with a knack for crafting innovative and efficient solutions. My journey in the world of 
                    software development has been driven by a relentless curiosity and a commitment to turning ideas into reality.
                    </p>
                    <p >
                        I specialize in full-stack web development, combining my skills in both front-end and back-end technologies. From creating sleek and responsive user 
                        interfaces to architecting robust server-side systems, I thrive in the dynamic and ever-evolving realm of software development.
                    </p>
                    <hr style={{marginTop:"40px"}}></hr>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <ul style={{ padding: "0", listStyle: "none" }}>
                                <li className='listItem'><span className='listTitle'>Birthday :</span>22.07.2001</li>
                                <li className='listItem'><span className='listTitle'>Age :</span>22</li>
                                <li className='listItem'><span className='listTitle'>Address :</span>Hendred Road, Nairobi</li>
                                <li className='listItem'><span className='listTitle'>Email :</span>itsaminarajab@gmail.com</li>
                                <li className='listItem'><span className='listTitle'>Phone :</span>+254759899033</li>
                            </ul>
                        </div>

                        <div className='col-lg-6'>
                            <ul style={{ padding: "0", listStyle: "none" }}>
                                    <li className='listItem'><span className='listTitle'>Nationality :</span>Kenyan</li>
                                    <li className='listItem'><span className='listTitle'>Study :</span>Computer Science</li>
                                    <li className='listItem'><span className='listTitle'>Degree :</span>Bachelor 2022</li>
                                    <li className='listItem'><span className='listTitle'>Freelance :</span>Available</li>
                                    <li className='listItem'><span className='listTitle'>Experience :</span>2 years</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='col-4'>
                <img className='myProfileImage' src={img}alt="Your Alt Text" />
                </div>
            </div>
        </div>
        </>

    )}                         