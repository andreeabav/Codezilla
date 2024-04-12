import React from 'react'
import classes from '../../../style/home.module.css';
import CollapsibleComponent from '../../../ui/CollapsibleComponent';
function Faq() {
    const faq=[
        {id:1, title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec."},
        {id:2, title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec."},
        {id:3, title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec."},
        {id:4, title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit?", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec."},
        {id:5, title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec."}
    ];
    return (
        <div className={`${classes.greyBckg} ${classes.mtb}`}>
            <div className="container">
                <div className={classes.ctnFaq}>
                    <h2 className="center">FAQ</h2>
                    <div className={classes.faqItems}>
                        {faq.map((item) => <CollapsibleComponent key={item.id} title={item.title}>
                            <p>{item.text}</p>
                        </CollapsibleComponent>)}
                    </div> 
                </div>
            </div>
        </div>
    );
}
export default Faq;