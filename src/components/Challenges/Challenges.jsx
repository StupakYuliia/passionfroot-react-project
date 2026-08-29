import classes from '../Challenges/Challenges.module.css'
import crossIcon from '../../assets/img/crossIcon.svg'
import Image from '../Image/Image'
import passionfrootCharacterImg from '../../assets/img/passionfroot-character.png'

const challengesData = [
    {
        id: 1,
        icon: crossIcon,
        text: "You waste 70% of time on admin work",
    },
    {
        id: 2,
        icon: crossIcon,
        text: "Juggling 10+ tools to handle requests and payments",
    },
    {
        id: 3,
        icon: crossIcon,
        text: "Losing track, details and your spark due to constant back and forth",
    },
]

export default function Challenges() {
    return (
        <section className={classes.challenges}>
            <div className={`container ${classes.challenges__wrapper}`}>
                <div className={classes.challenges__content}>
                    <h3 className={classes.challenges__title}>Is running the show running you down, too?</h3>
                    <ul className={classes.challenges__list}>
                        {challengesData.map((item) => (
                            <li className={classes.challenges__item} key={item.id}>
                                <img src={item.icon} alt='Cross'/>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.challenges__img}>
                    <Image
                        src={passionfrootCharacterImg}
                        alt='A passionfruit character working at a desk with a laptop'
                        className={classes.challenges__characterPic}
                    />
                </div>
            </div>
        </section>
    )
}