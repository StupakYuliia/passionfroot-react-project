import classes from '../Resources/Resources.module.css'
import { useState } from 'react';


const categories = ["All", "Newsletter", "Podcasts", "Blog", "Guides"];

const cardsData = [
    {
        id: 1, 
        title: "You're in the wrong lane", 
        date: "September 16, 2022",
        time: "3 min read",
        category: "Newsletter",
        bgColor: "#EDA6E6",
    },
    {
        id: 2, 
        title: "The power of a weekly review", 
        date: "June 3, 2022",
        time: "3 min read",
        category: "Podcasts",
        bgColor: "#FFF480",
},
{
    id: 3, 
    title: "How to ask better questions", 
    date: "May 13, 2022",
    time: "8 min read",
    category: "Blog",
    bgColor: "#A8EBFF",
},
];


export default function Resources() {
    const [activeCategory, setActiveCategory] = useState("All");

    let visibleCard = cardsData;
    if (activeCategory !== "All") {
        visibleCard = cardsData.filter((card) => card.category === activeCategory)
    }

    return (
        <section className={classes.resources}>
            <div className={`container ${classes.resources__wrapper}`}>
                <h3 className={classes.resources__title}>Content that gets your creative juices going</h3>
                <div className={classes.resources__buttons}>
                    {categories.map((category) => (
                        <button 
                            key={category} 
                            className={classes.resources__btn}
                            onClick={() => setActiveCategory(category)}
                        >
                        {category}
                        </button>
                    ))}
                </div>
                <div className={classes.resources__cards}>
                    {visibleCard.map((card) => (
                        <div key={card.id} className={classes.resources__card} style={{backgroundColor: card.bgColor}}>
                            <div className={classes.resources__date}>
                                <span>{card.date}</span> • <span>{card.time}</span>
                            </div>
                            <h4 className={classes.card__title}>{card.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}