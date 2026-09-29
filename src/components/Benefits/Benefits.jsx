import FeatureBlock from '../FeatureBlock/FeatureBlock'
import checkIcon from '../../assets/img/checkIcon.svg'
import passionfrootCharacterImg from '../../assets/img/passionfroot-character.png'

const benefitsData = [
    {
        id: 1,
        icon: checkIcon,
        text: "Free up your time (and mind) to create more",
    },
    {
        id: 2,
        icon: checkIcon,
        text: "Handle all partnerships in one place",
    },
    {
        id: 3,
        icon: checkIcon,
        text: "Streamline your workflows to save time",
    },
]

export default function Benefits() {
    return (
       <FeatureBlock
            title='Get over the overwhelm'
            items={benefitsData}
            imageSrc={passionfrootCharacterImg}
            imageAlt='A passionfruit character working at a desk with a laptop'
       /> 
    )
}