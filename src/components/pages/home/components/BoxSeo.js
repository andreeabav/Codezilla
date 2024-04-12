import React, { useState } from 'react'
import classes from '../../../style/home.module.css';
import Button from '../../../ui/Button';
function BoxSeo() {
    const popUpContent=`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus.</p>`;
    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(!showPopup);
    };
    const handlePopupClose = () => {
        setShowPopup(false);
    };
    return (
        <div className="container mtb">
            <div className={`${classes.greyBckg} ${classes.seoCtn} ${classes.mtb} center`}>
                <h2>Some more boring text, <span>also good for SEO</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.</p>
                <Button classes="greenButton" onClick={handleButtonClick}>do it</Button>
                {showPopup && (
                    <div className="popup">
                    <div className="popupContent">
                        <span className="closePopup" onClick={handlePopupClose}>&times;</span>
                        <div dangerouslySetInnerHTML={{ __html: popUpContent }} />
                        
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default BoxSeo;