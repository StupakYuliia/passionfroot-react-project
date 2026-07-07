import classes from '../Audience/Audience.module.css'

const audienceList = [
    'Podcasters',
    'Youtubers',
    'Newsletter Writers',
    'Media companies',
    'TikTokers',
    'Influencers',
]

export default function Audience() {
    return (
        <section className={classes.audience}>
            <div className={`container ${classes.audience__wrapper}`}>
                <h2 className={`${classes.audience__title} title-hero`}>For all creators</h2>
                <ul className={classes.audience__list}>
                    {audienceList.map((item) => (
                        <li className={classes.audience__item} key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}