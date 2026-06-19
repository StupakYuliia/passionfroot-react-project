import classes from '../Image/Image.module.css'

export default function Image({src, alt = '', className = '', width, height}) {
    return (
        <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${classes['ui-image']} ${className}`}
        />
    );
}