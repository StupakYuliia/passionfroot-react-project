import classes from './Button.module.css'

export default function Button({children, onClick, type='button', className = ''}) {
    
    return (
        <button type={type} className={`${classes['ui-button']} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}