import Button from '../Button/Button'
import classes from '../Hero/Hero.module.css'
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className={classes.hero}>
            <div className={`container ${classes.hero__wrapper}`}>
                <h1 className={`${classes.hero__title} title-hero`}>Where creators do business</h1>
                <p className={classes.hero__text}>Passionfroot lets you handle sponsorships, collaboration requests, bookings, and payments – in one single place. Stop feeling overwhelmed by the opportunities. Start seizing them.</p>
                <Button onClick={() => setIsModalOpen(true)} className={classes.hero__btn}>Get access</Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </section>
    )
}