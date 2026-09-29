import FeatureBlock from '../FeatureBlock/FeatureBlock'
import crossIcon from '../../assets/img/crossIcon.svg'
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
        <FeatureBlock
            title='Is running the show running you down, too?'
            items={challengesData}
            imageSrc={passionfrootCharacterImg}
            imageAlt='A passionfruit character working at a desk with a laptop'
        />
    )
}