import { BsKey } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'


import classes from "./settings.module.css"

const settings = (props) => {

    return (
        <div className={classes.cont}>
            <div className={classes.header}>
                <div onClick={() => props.history.goBack()}><AiOutlineArrowLeft /></div>
                <div>Settings</div>
                <div></div>
            </div>
            <div className={classes.Container}>
                <div className={classes.login_settings_container}>
                    <div className={classes.text_icon_cont}>
                        <span><BsKey /></span>
                        <p>Login Settings</p>
                    </div>
                    <div><MdKeyboardArrowRight /></div>
                </div>
            </div>
        </div>
    );
};

export default settings;