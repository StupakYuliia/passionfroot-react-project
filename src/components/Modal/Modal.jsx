import { useState, useEffect } from "react";
import Button from "../Button/Button"
import classes from "./Modal.module.css"

export default function Modal({isOpen, onClose}) {
    const [userName, setUserName] = useState ('');
    const [userEmail, setUserEmail] = useState ('');
    const [userNameError, setUserNameError] = useState ('');
    const [userEmailError, setUserEmailError] = useState ('');

    useEffect(() => {
        if (isOpen) {
            setUserName('')
            setUserEmail('');
            setUserNameError('');
            setUserEmailError('');
        }
    }, [isOpen]);

    if (isOpen === false || !isOpen) {
        return null;
    }

    function handlSubmit (e) {
        e.preventDefault();
        setUserNameError('');
        setUserEmailError('');

        if (userName.trim().length <1) {
            setUserNameError('Enter name');
            return;
        }


        console.log("Данные отправлены");
        setUserName("");
        setUserEmail("");
        onClose();
    }
    
    return (
        <div className={classes.modal}>
            <div className={classes.modal__wrapper}>
                <div className={classes.modal__content}>
                <h3 className={classes.modal__title}>Get Started with Passionfroot</h3>
                <Button type="button" onClick={onClose} className={classes.modal__btn}>Close</Button>
                </div>
                <form className={classes.modal__form} onSubmit={handlSubmit} >
                    <div className={classes.form__input}>
                        <label htmlFor="name">Name:</label>
                        <input 
                        id="name" name="name" placeholder="Your name"
                        type="text" value={userName} onChange={(e) => setUserName(e.target.value)}
                        />
                        {userNameError && <span className={classes.error_message} 
                        style={{color: 'red', fontSize: '14px'}}>{userNameError}</span>}
                    </div>
                    <div className={classes.form__input}>
                        <label htmlFor="email">Email:</label>
                        <input 
                        id="email" name="email" placeholder="Email"
                        type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                        {userEmailError && <span className={classes.error_message} 
                        style={{color: 'red', fontSize: '14px'}}>{userEmailError}</span>}
                    </div>
                    <Button type="submit" className={classes.modal__submit}>Send a request</Button>
                </form>
            </div>
        </div>
    )
}