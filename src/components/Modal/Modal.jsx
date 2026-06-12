import Button from "../Button/Button"
import classes from "./Modal.module.css"

export default function Modal({isOpen, onClose}) {
    if (isOpen === false || !isOpen) {
        return null;
    }
    return (
        <div className={classes.modal}>
            <div className={classes.modal__wrapper}>
                <div className={classes.modal__content}>
                <h3 className={classes.modal__title}>Get Started with Passionfroot</h3>
                <Button onClick={onClose} className={classes.modal__btn}>Close</Button>
                </div>
                <form className={classes.modal__form}>
                    <div className={classes.form__input}>
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" placeholder="Your name"/>
                    </div>
                    <div className={classes.form__input}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" placeholder="Email"/>
                    </div>
                    <Button type="submit" className={classes.modal__submit}>Send a request</Button>
                </form>
            </div>
        </div>
    )
}