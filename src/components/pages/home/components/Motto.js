import React, { useState, useEffect } from 'react'
import classes from '../../../style/home.module.css';
function Motto() {
    const mottos=[
        {id:1, author:"Ion Luca Caragiale", motto:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.</p>"},
        {id:2, author:"Mihai Eminescu", motto:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo </p>"},
        {id:3, author:"Lorem Ipsum", motto:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi.</p>"}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentContent, setCurrentContent] = useState(mottos[currentIndex]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % mottos.length);
            setCurrentContent(mottos[currentIndex]);
            setIsVisible(true);
        }, 500);
        }, 10000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);
    return (
        <div className="container">
            <h2 className="center">Don’t trust us,<span>trust them</span></h2>
            <div className={classes.ctnMotto}>
            <div className={classes.fadeContent}>
                <div className={`${classes.content} ${isVisible ? classes.fadeIn : classes.fadeOut}`} dangerouslySetInnerHTML={{ __html: currentContent['motto'] }} />
                <div className={`${classes.authorMotto} ${isVisible ? classes.fadeIn : classes.fadeOut}`} dangerouslySetInnerHTML={{ __html: currentContent['author'] }} />
            </div>
                <div className={`${classes.quota} ${classes.quotaTop}`}></div>
                <div className={`${classes.quota} ${classes.quotaBottom}`}></div>
            </div>
        </div>
    );
}
export default Motto;