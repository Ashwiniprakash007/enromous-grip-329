import React from 'react'
import './Resources.css'
export const Resources = ({value}) => {
  return (
    <div className={value ? "true" : "false"}>
          <div className="resources-dropdown">
                 <div className='div-1'>
                  <h3 className='heading-lists'>LEARN</h3>
                  <ul>
                    <li> Blog</li>
                    <li>Customer stories</li>
                    <li>Resource center</li>
                    <li>Guides</li>
                    <li>App download</li>
                    <li>Support</li>
                  </ul>
                 </div>
                 <div className='resources-div-2'>
                    <div className='resources-up-nav-list'>
                      <h3 className='r-headerput heading-lists'>CONNECT & PODCASTS</h3>
                    <ul className='resources-inner-list'>
                    <li>Event</li>
                    <li>Webinar</li>
                    <li>Podcast</li>
                    <li>All Hands on Tech</li>
                    <li>Perspectives in Leadership</li>
                      </ul>
                  </div>
                  <div className="poster-nav-resources">
                     <h1 className='h1'>2022 Tech Forecast and Build Better Blueprint
                     </h1>
                     <h3>
                     PREPARE FOR SHIFTS AND TRENDS IN THE INDUSTRY
                     </h3>
                     <div className="rs-btn">
                      CHECK IT OUT
                     </div>
                  </div>

                    
           
                  <div className='resources-down-nav'></div>
                  </div>
      </div>
    </div>
  )
}
