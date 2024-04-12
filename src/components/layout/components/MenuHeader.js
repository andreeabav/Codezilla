import React from 'react'
import classes from '../../style/header.module.css';
import Button from '../../ui/Button';
function MenuHeader() {
    const links = [
        {name:'About', link:'*',class:'menuLink'},
        {name:'Jobs', link:'*',class:'menuLink'},
        {name:'Cities', link:'*',class:'menuLink'},
        {name:'Charging', link:'*',class:'menuLink'}
    ]
    return (
        <div className={classes.menuHeader}>
            <ul className={classes.menuLinks}>
                {links.map((item) => <li key={item.name}><a href={item.link} className={classes[item.class]}>{item.name}</a></li>)}
                <Button classes="greenButton">ride me</Button>
            </ul>
        </div>
    );
}
export default MenuHeader;