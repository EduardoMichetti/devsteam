import styles from './button.module.css'

export default function Button ({ children, fullWidh }) {
    return (
        <button className={`${styles.button} ${fullWidh && styles.fullwidth}`} > {children} </button>
    )
}