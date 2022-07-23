import React from 'react'
import './Footer.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
export const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
           <div className="main-container-footer">
                      <ul>
                       <h3>SOLUTIONS</h3>
                           <li><a href="#">Pluralsight Skills</a></li>
                           <li><a href="#">Pluralsight Flow</a></li>
                           <li><a href="#">Government</a></li>
                           <li><a href="#">Gift of Pluralsight</a></li>
                           <li><a href="#">View Pricing</a></li>
                           <li><a href="#">Contact Sales</a></li>
                           <li><a href="#">Skill up for free</a></li>
                       </ul>
                       <ul>
                       
                       <h3>PLATFORM</h3>
                           <li><a href="#">Browse library</a></li>
                           <li><a href="#">Role IQ</a></li>
                           <li><a href="#">Skill IQ</a></li>
                           <li><a href="#">Iris</a></li>
                           <li><a href="#">Authors</a></li>
                           <li><a href="#">Professional Services</a></li>
                       </ul>
                       <ul>
                       <h3>COMPANY</h3>
                           <li><a href="#">About us</a></li>
                           <li><a href="#">Customer stories</a></li>
                           <li><a href="#">Careers</a></li>
                           <li><a href="#">Blog</a></li>
                           <li><a href="#">Resource center</a></li>
                           <li><a href="#">Newsroom</a></li>
                           <li><a href="#">Guides</a></li>
                       </ul>
                       <ul>
                    
                       <h3> RESOURCES</h3>
                           <li><a href="#">Download Pluralsight</a></li>
                           <li><a href="#">Events</a></li>
                           <li><a href="#">Teach</a></li>
                           <li><a href="#">Partners</a></li>
                           <li><a href="#">Affiliate Partners</a></li>
                           <li><a href="#">PluralsightOne.org</a></li>
                           <li><a href="#">Subscribe</a></li>
                       </ul>
                       <ul>
                       <h3>SUPPORT</h3>
                           <li><a href="#">Contact</a></li>
                           <li><a href="#">Help center</a></li>
                           <li><a href="#">IP allowlist</a></li>
                           <li><a href="#">Sitemap</a></li>
                       </ul>     
            </div>
            <div className='second-container-footer'>
               <div className='lang-footer'>
                <p>Dutch</p>
                <p>English</p>
                <p>Spanish</p>
               </div>
            </div>
            <div className='third-container-footer'>
                <div className="privacy-footer">
                Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.
                </div>
                <div className='privacy-footer-tnc'>
                    <p>Terms of use</p>
                    <p>Privacy</p>
                    <p>Contact Us</p>
                </div>
            </div>
     
          
          
      </footer>
 <div className="footer-sidebar bg-black">
  <Accordion className='bg-black'>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        SOLUTIONS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='list-style-side'>
    <li><a href="#">Pluralsight Skills</a></li>
    <li><a href="#">Pluralsight Flow</a></li>
    <li><a href="#">Government</a></li>
     <li><a href="#">Gift of Pluralsight</a></li>
     <li><a href="#">View Pricing</a></li>
     <li><a href="#">Contact Sales</a></li>
     <li><a href="#">Skill up for free</a></li>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        PLATFORM
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='list-style-side'>
    <li><a href="#">Browse library</a></li>
    <li><a href="#">Role IQ</a></li>
    <li><a href="#">Skill IQ</a></li>
    <li><a href="#">Iris</a></li>
    <li><a href="#">Authors</a></li>
    <li><a href="#">Professional Services</a></li>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        COMPANY
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='list-style-side'>
     <li><a href="#">About us</a></li>
     <li><a href="#">Customer stories</a></li>
     <li><a href="#">Careers</a></li>
     <li><a href="#">Blog</a></li>
     <li><a href="#">Resource center</a></li>
     <li><a href="#">Newsroom</a></li>
     <li><a href="#">Guides</a></li>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        RESOURCES
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='list-style-side'>
    <li><a href="#">Download Pluralsight</a></li>
    <li><a href="#">Events</a></li>
    <li><a href="#">Teach</a></li>
    <li><a href="#">Partners</a></li>
    <li><a href="#">Affiliate Partners</a></li>
    <li><a href="#">PluralsightOne.org</a></li>
    <li><a href="#">Subscribe</a></li>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        SUPPORT
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='list-style-side'>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Help center</a></li>
    <li><a href="#">IP allowlist</a></li>
    <li><a href="#">Sitemap</a></li>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<div className='second-container-footer'>
               <div className='lang-footer'>
                <p>Dutch</p>
                <p>English</p>
                <p>Spanish</p>
               </div>
            </div>
            <div className='third-container-footer'>
                <div className="privacy-footer">
                Copyright © 2004 - 2022 Pluralsight LLC. All rights reserved.
                </div>
                <div className='privacy-footer-tnc'>
                    <p>Terms of use</p>
                    <p>Privacy</p>
                    <p>Contact Us</p>
                </div>
            </div>
      </div>
      </div>
  )
}






// <ul>
// <h3></h3>
//  
// </ul>
// <ul>

// <h3></h3>
//     
// </ul>
// <ul>
// <h3></h3>
//     
// </ul>
// <ul>

// <h3> </h3>
//     
// </ul>
// <ul>
// <h3></h3>
//    
// </ul>     