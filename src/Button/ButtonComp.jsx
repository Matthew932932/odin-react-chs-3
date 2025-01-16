// Button using composition

import styles from "./Button.module.css"
 
export default function ButtonComp({type="primary", label="Button"}) {
    return (
        <button className={styles[type]}>{label}</button>
    )
}
