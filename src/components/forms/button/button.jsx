import styles from './button.module.css'

export default function Button ({ children, fullWidh, ...props }) {
    return (
        <button className={`${styles.button} ${fullWidh && styles.fullwidth}`} {...props} > {children} </button>
    )
}