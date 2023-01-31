import React from 'react';
import './CSS/styles.css'


function Footer() {
  return (
    <div className='theme-colors' >  
      <div className=' text-center'>
        <p>Niloufar S. © 
          { new Date().getFullYear() } 
        </p>
      </div>
    </div>
  );
}
  
export default Footer;
  