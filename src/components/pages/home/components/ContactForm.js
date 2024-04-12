import React, { useState } from 'react'
import { createRoot } from 'react-dom/client';
import classes from '../../../style/home.module.css';
import Input from '../../../ui/Input';
import Textarea from '../../../ui/Textarea';
import Button from '../../../ui/Button';
function ContactForm() {
    const [name, setName] = useState('');
    const [fruit, setFruit] = useState('');
    const [info, setInfo] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    const handleFruitChange = (e) => {
        setFruit(e.target.value);
    };
    const handleInfoChange = (e) => {
        setInfo(e.target.value);
    };
    const handleButtonClick = () => {
        const element = <div className={classes.monkeyCtn}><h2 className="center">Thank you, monkey</h2><img alt="monkey" src={process.env.PUBLIC_URL + '/images/monkey.png'} /></div>;
        const commentRoot = createRoot(document.getElementById('ctnForm')); 
        commentRoot.render(element);
    };
    return (
        <div className={`container  ${classes.mtb}`}>
            <div id="ctnForm" className={classes.ctnForm}>
                <h2 className="center">How about you?</h2>
                <form>
                    <Input
                        type="text"
                        id="name"
                        label="Full name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder=""
                        required
                    />
                    <Input
                        type="text"
                        id="fruit"
                        label="Preffered fruit"
                        value={fruit}
                        onChange={handleFruitChange}
                        placeholder=""
                        required
                    />
                    <Textarea
                        id="info"
                        label="How can we help you?"
                        value={info}
                        onChange={handleInfoChange}
                        placeholder=""
                        required
                    />
                    <div className={classes.ctnButton}>
                        <Button classes="blueButton" onClick={handleButtonClick}>submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ContactForm;