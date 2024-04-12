import React from 'react'
import classes from '../style/footer.module.css';
function Footer() {
    const links=[
        {name:"Coffee",url:""},
        {name:"Tea",url:""},
        {name:"Water",url:""},
        {name:"Juice",url:""},
        {name:"Beer",url:""},
        {name:"Wine",url:""}
    ];
    return (
        <div className={classes.ctnFooter}>
            <div className={classes.ctnFooterUp}>
                <div className="container">
                    <div className={classes.gridCtn}>
                        <div className={`${classes.footerEl} ${classes.areaHeadline}`}>
                            <div className={classes.title}>Some headline</div>
                            <div className={`${classes.info} ${classes.onlyText}`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Lorem ipsum dolor sit amet, adipiscing elit. Morbi consectetur aliquam urna. 
                            </div>
                        </div>
                        <div className={`${classes.footerEl} ${classes.areaLinks} center`}>
                            <div className={classes.title}>Other links</div>
                            <div className={classes.info}>
                                {links.map((item) => <a key={item.name} href={item.url}>{item.name}</a>)}
                            </div>
                        </div>
                        <div className={`${classes.footerEl} ${classes.alignRight} ${classes.areaLogo}`}>
                            <img alt="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.ctnFooterBottom}>
                <div className="container">
                    Copyright 2022 Codezilla
                </div>
            </div>
        </div>
    );
}
export default Footer;
