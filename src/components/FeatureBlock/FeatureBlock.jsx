import classes from '../FeatureBlock/FeatureBlock.module.css';
import Image from '../Image/Image';


export default function FeatureBlock({title, items = [], imageSrc, imageAlt}) {
    return (
        <section className={classes.feature}>
            <div className={`container ${classes.feature__wrapper}`}>
                <div className={classes.feature__content}>
                    <h3 className={classes.feature__title}>{title}</h3>
                    <ul className={classes.feature__list}>
                        {items.map((item) => (
                            <li className={classes.feature__item} key={item.id}>
                                <img src={item.icon} alt=''/>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes.feature__img}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        className={classes.feature__characterPic}
                    />
                </div>
            </div>
        </section>
    )
}