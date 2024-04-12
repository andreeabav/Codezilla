import React from 'react'
import classes from '../../../style/home.module.css';
function Benefits() {
    const benefits=[
        {id:1, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus.", new:0},
        {id:2, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ", new:0},
        {id:3, text:"Morbi consectetur aliquam urna.", new:0},
        {id:4, text:"Morbi consectetur aliquam urna.", new:0},
        {id:5, text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna.", new:1}
        
    ]
    return (
        <div className="container">
            <div className={`${classes.mainBenefits} ${classes.mtb}`}>
                <h2 className="center">Our main benefits</h2>
                <div className={classes.ctnBenefits}>
                    {benefits.map((item) => <div key={item.id} className={`${classes.ctnBenefit} center`}>{item.new ? (<div className={classes.newAbsolute}>new</div>):''}<img src={process.env.PUBLIC_URL + '/images/benefit.png'} alt={item.id}/><p>{item.text}</p></div>)}
                </div>    
            </div>            
        </div>
    );
}
export default Benefits;