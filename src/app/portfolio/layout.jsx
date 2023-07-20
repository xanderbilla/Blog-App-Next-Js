import React from 'react'
import styles from './page.module.css'

const layout = ({ children }) => {
    return (
        <div className={styles.layoutTitle}>
            <h1 className={styles.miniTitle}>
                Our Works
            </h1>
            {children}
        </div>
    )
}

export default layout