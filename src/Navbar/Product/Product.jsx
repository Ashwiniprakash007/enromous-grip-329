import React from 'react'
import './Product.css'
export const Product = ({value}) => {
  return (
     <div className={value ? "true" : "false"}>
     <div className='product-div'>
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
    </div>
    
  )
}

