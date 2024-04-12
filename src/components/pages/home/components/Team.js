import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import classes from '../../../style/home.module.css';
function Team() {
    const team=[
        {id:1, name:"Ion Popescu", tag:"the fixer", description:"He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. ", gender:"male"},
        {id:2, name:"Andreea Ghica", tag:"the colourful", description:"She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. ", gender:"female"},
        {id:3, name:"Alexandru Ioanovici Cuza", tag:"the guy who owns the company", description:"He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. ", gender:"male"},
        {id:4, name:"Gruia", tag:"the entertainer", description:"He likes to entertain. ", gender:"male"},
        {id:5, name:"Roxana", tag:"HR", description:"She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum et ullamcorper ipsum. ", gender:"female"},
        {id:6, name:"Mihaela Acatrinei", tag:"the coffee addict", description:"the coffee addict", gender:"female"},
        {id:7, name:"Alexandru Ioanovici Cuza", tag:"the IT guy", description:"He likes to kick the keyboard.", gender:"male"}
    ];
    const [windowWidth, setWindowWidth] = useState(0);
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
      };
      useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
      }, []);
        if (windowWidth < 901){
            $('.sliderForMobile').not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows:true,
                responsive: [
                    {
                      breakpoint: 650,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                ]
            });
        }else{
            if($('.sliderForMobile').hasClass('slick-initialized')) {
                $('.sliderForMobile').slick("unslick");
            }
        }
    
    return (
        <div className="container mtb">
            <h2 className="center">Our fantastic team</h2>
            <div className={` ${classes.ctnTeam} center sliderForMobile`}>
            {team.map((item) =>
            <div key={item.id} className={`${classes.ctnMember} center`}>
                <img className={classes.imgTeam} src={process.env.PUBLIC_URL + '/images/'+(item.gender ==="male" ? 'male.png' : 'female.png')} alt={item.name}/>
                <div className={classes.memberName}>{item.name}</div>
                <div className={classes.memberTag}>{item.tag}</div>
                <div className={classes.memberDescription}>{item.description}</div>
            </div>)}

                
            </div>
        </div>
    );
}
export default Team;