import React from 'react'
import './Sidebar.css'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import { Signin } from '../Signin/Signin'
  
const Sidebar = ({value}) => {
  return (
    <div className={value ? "true" : "false"}>
  <Accordion defaultIndex={[0]} allowMultiple className='bg-black display-hidden'>
  <AccordionItem>
    <h2>
      <AccordionButton className='color-white'>
        <Box flex='1' textAlign='left'>
          Platform
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='color-white'>
      <div className='side-platform-container'>
        <ul>
          <h3 className='side-heading-lists'>WAYS TO UP SKILL</h3>
          <li>Courses</li>
          <li>Skill Assesment</li>
          <li>Labs</li>
          <h3 className='side-heading-lists'>
            SKILLS FOR
          </h3>
          <li>Software Development</li>
          <li>IT ops</li>
          <li>Info and Cyber Security</li>
          <h3 className='side-heading-lists'>TOP TRENDING PATHS</h3>
          <div className="side-box">
               <img src="https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png?w=75" alt="" />
                <div>
                  <p>Microsoft Azure deployment</p>
              </div>
          </div>
           <div className="side-box">
               <img src="https://pluralsight2.imgix.net/paths/images/r-programming-eb2e267a97.png?w=75" alt="" />
                  <div>
                    <p>Cleaning Data With R</p>
                  </div>
            </div>
        </ul>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton className='color-white'>
        <Box flex='1' textAlign='left'>
          Resources
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='color-white'>
    <div className='side-platform-container'>
        <ul>
          <h3 className='side-heading-lists'>CONNECT & PODCASTS</h3>
         
                    <li>Event</li>
                    <li>Webinar</li>
                    <li>Podcast</li>
                    <li>All Hands on Tech</li>
                    <li>Perspectives in Leadership</li>
                      
        </ul>
      </div>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton className='color-white'>
        <Box flex='1' textAlign='left'>
          Products
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='color-white'>
    <div className='side-product-div'>
        <div className="product-box p-div-1">
          <div className="upper-products ">
            <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" alt="" />
          </div>
          <div className="down-products">
            <p>Build tech skills to drive results</p>
          </div>
        </div>
        <div className="product-box">
        <div className="upper-products">
            <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png" alt="" />
          </div>
          <div className="down-products">
            <p>Get insights into your workflow</p>
          </div>
        </div>
        <div className="product-box p-div-up p-div-1">
          <ul className='li-resources'>
            <li>What is Skills</li>
            <li>View Plans</li>
          </ul>
        </div>
        <div className="product-box p-div-up">
        <ul className='li-resources'>
            <li>What is Flow</li>
            <li>View Plans</li>
          </ul>
        </div>
    </div>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton className='color-white'>
        <Box flex='1' textAlign='left'>
          Signin
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='color-white'>
    <div className='side-sign-in-div'>
        <div className="sign-in-box sign-in-box-1">
          <p className='heading-lists'>SIGN IN WITH</p>
          <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Skill_logo_white.png" alt="" />
         
        </div>
        <div className="sign-in-box">
          <p className='heading-lists'>SIGN IN WITH</p>
          <img src="https://www.pluralsight.com/content/dam/pluralsight2/experiment-fragment/navigation/Flow_Logo_white.png" alt="" />
        </div>
    </div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default Sidebar