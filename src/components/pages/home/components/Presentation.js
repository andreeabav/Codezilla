import React, { useState } from 'react'
import classes from '../../../style/home.module.css';
import Button from '../../../ui/Button';
function Presentation() {
    const popUpContent=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. </p>`;
    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(!showPopup);
    };
    const handlePopupClose = () => {
        setShowPopup(false);
    };
    return (
        <div className="container">
            <div className={`${classes.mtb} ${classes.gridHalf}`}>
                <div className={classes.imgPresentation}>
                    <img alt="scooters" src={process.env.PUBLIC_URL + '/images/scooters.png'} />
                </div>
                <div className={classes.gridTxt}>
                    <h2>Nice scooters, right?</h2>
                    <p>Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. Praesent justo mauris, facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor. Praesent in posuere ante. Aenean dui mi, imperdiet id placerat quis, fringilla et neque. Suspendisse porta justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum vel dui ac sodales. Vivamus consectetur tortor at mauris vulputate finibus.</p>
                </div>
            </div>
            <div className={`${classes.greyBckg} ${classes.seoCtn} ${classes.mtb} center`}>
                <h2>Some boring text, good for SEO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.</p>
                <p>Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. <b>Praesent</b> justo mauris, facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor. Praesent in posuere ante. Aenean dui mi, imperdiet id placerat quis, fringilla et n eque. Suspendisse porta justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum vel dui ac sodales. Vivamus consectetur tortor at mauris vulputate finibus.</p>
                <Button classes="greenButton" onClick={handleButtonClick}>do something</Button>
                {showPopup && (
                    <div className="popup">
                    <div className="popupContent">
                        <span className="closePopup" onClick={handlePopupClose}>&times;</span>
                        <div dangerouslySetInnerHTML={{ __html: popUpContent }} />
                        
                    </div>
                    </div>
                )}
            </div>
            <div className={`${classes.mtb} ${classes.gridHalf} ${classes.gridReverse}`}>
                <div className={`${classes.gridTxt} ${classes.txtRight}`}>
                    <h2>Still nice, right??</h2>
                    <p>Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet efficitur. Praesent justo mauris, facilisis eu magna et, varius lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas id justo at quam faucibus euismod. Proin eu urna blandit, pharetra enim scelerisque, malesuada justo. Sed commodo velit id augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae diam ultricies tempor.</p>
                </div>
                <div className={classes.imgPresentation}>
                    <img alt="scooters" src={process.env.PUBLIC_URL + '/images/scooters.png'} />
                </div>
            </div>
        </div>
    );
}
export default Presentation;