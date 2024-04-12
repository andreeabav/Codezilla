import React from 'react'
import classes from '../../../style/home.module.css';
import Button from '../../../ui/Button';
function Download() {
    return (
        <div className={`container center ${classes.ctnDownload}`}>
            <h2>Bored to stay in traffic?</h2>
            <p>Download the app</p>
            <div className={classes.ctnButtons}>
                <Button classes="blueButton">download 1</Button>
                <Button classes="blueButton">download 2</Button>
            </div>
        </div>
    );
}
export default Download;