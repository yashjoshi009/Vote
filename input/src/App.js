import React, { useState } from 'react';
import './App.css';
import ElectraImage from './electra.png'; // Import your image file
import one from './1.png';
import two from './2.png';

import four from './4.png';
import seven from './7.png';
import eight from './8.png';
import nine from './9.png';



function App() {
  const [showText, setShowText] = useState(false);

  const handleAnimationEnd = () => {
    setShowText(true);
    document.querySelector('.website-name').classList.add('animated'); // Add animated class after animation ends
  };

  return (
    <>
    <div className="App">
      <header className="App-header">
        <button className="login-button">Login</button>
        <h1 className="website-name" onAnimationEnd={handleAnimationEnd}>
          <img src={ElectraImage} alt="Electra Logo" style={{ width: '300px', marginLeft: '10px' }} />
        </h1>
        <p id='vote'>Vote Anytime Anywhere</p>
        {showText && (
          <>
             <h2 className='info'>
              Secure, Blockchain-based Elections With Electra's online voting system, your organization members can cast their vote anywhere and anytime with secure internet voting.
            </h2>
            <h4 className='h4'>For more information and to use our Website you first <a href='log'>login</a> to our website.</h4> 
          </>
        )}
        
      </header>
    
    </div>
      <div className='secure'>
        <div className='image'>
          <div><img src={one} alt="Unsecure Logo" style={{ width: '90px', marginLeft: '10px' }} />
          <h1>Secure Voting</h1></div>
          <div><img src={two} alt="Unsecure Logo" style={{ width: '90px', marginLeft: '10px' }} />
          <h1>Mobile Ready</h1></div>
          <div><img src={four} alt="Unsecure Logo" style={{ width: '90px', marginLeft: '10px' }} />
          <h1>256-Bit Encryption</h1></div>
          <div><img src={seven} alt="Unsecure Logo" style={{ width: '90px', marginLeft: '10px' }} /></div>
          <div><img src={eight} alt="Unsecure Logo" style={{ width: '90px', marginLeft: '10px' }} /></div>
          <div><img src={nine} alt="Unsecure Logo" style={{ width: '90px', marginLeft: '10px' }} /></div>
         </div>

      </div>
      
      </>
  );
}

export default App;
