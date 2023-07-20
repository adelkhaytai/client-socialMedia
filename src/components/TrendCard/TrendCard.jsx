import React from 'react'
import { TrendData } from '../../data/TrendData'
import './TrendCard.css'
const TrendCard = () => {
  return (
    <div className='TrendCard'>
        <div className=''>
            <h3>Trend for you</h3>  
            {TrendData.map((trend)=>{
             return(
                <div className="trend">
                <span>#{trend.name}</span>
                <span>#{trend.shares}k shares</span>
            </div>
             )
            })}
        </div>
    
    </div>
  )
}

export default TrendCard