import classes from '../FaqAccordion/FaqAccordion.module.css'
import { useState, useRef, useEffect } from 'react'

const accordionItemsDate = [
    {
        id: 1,
        button: "What is Passionfroot?",
        text: "Passionfroot is an all-in-one platform for creators to manage sponsorships, handle bookings, track requests, and receive payments seamlessly."    
    },
    {
        id: 2,
        button: "Is Passionfroot for me?",
        text: "Yes, if you are a content creator, podcaster, newsletter writer, or influencer looking to streamline brand partnerships and save time on administrative work."    
    },
    {
        id: 3,
        button: "How do I get access?",
        text: "You can sign up directly on our website to create your workspace or request early access through our onboarding form."    
    },
    {
        id: 4,
        button: "How much does it cost?",
        text: "We offer flexible plans tailored to your audience size and feature needs, including a free tier to get started easily."    
    },
]

export default function FaqAccordion() {
    const [isOpen, setIsOpen] = useState(null);
    const accordionRef = useRef(null);

    useEffect(() => {
        function handleClick(event) {
            if (!accordionRef.current.contains(event.target)) {
                setIsOpen(null);
            } 
        }
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
    
    return(
        <section className={classes.faq}>
            <div className={`container ${classes.faqWrapper}`}>
                <h2 className={classes.faqTitle}>Frequently Asked Questions</h2>
                <div ref={accordionRef} className={classes.accordion}>
                    {accordionItemsDate.map((item) => (
                       <div key={item.id} className={classes.accordionItem}>
                         <button onClick={() => setIsOpen(isOpen === item.id ? null : item.id)} className={classes.accordionItemBtn}>{item.button}</button>
                         <div className={classes.accordionItemContent}>
                            {item.id === isOpen && (
                                <p className={classes.accordionItemAnswer}>{item.text}</p>    
                            )}
                         </div>
                       </div>
                    ))}
                </div>
            </div>
        </section>
    )
}