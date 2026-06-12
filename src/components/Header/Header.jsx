import Button from "../Button/Button";
import classes from '../Header/Header.module.css'
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Header() {
    const menuItems = [
        {id:1, title:'About us', url:'#'},
        {id:2, title:'Careers', url:'#'},
        {id:3, title:'Resources', url:'#'},
        {id:4, title:'Login', url:'#'},
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <header className={classes.header}>
            <div className={`container ${classes.header__wrapper}`}>
            <nav className={classes.header__nav}>
            <ul className={classes.header__menu}>
                {menuItems.map((item) => (
                <li className={classes.header__item} key={item.id}>
                    <a href={item.url} className={classes.header__link}>{item.title}</a>
                </li>
                ))}            
            </ul>
            </nav>
            <Button onClick={() => setIsModalOpen(true)}>Get access</Button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </header>
    )
}