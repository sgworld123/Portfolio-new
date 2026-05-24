import React from 'react'
import styles from './TOS.module.css'

const TOS = () => {
    return (
        <section className={styles.section}>
            <h2>Terms of Service</h2>

            <div className={styles.termsBox}>

                <p>
                    This project is provided for educational, demonstration, and portfolio
                    purposes only. By accessing or using this application, users agree to
                    use the platform responsibly and within lawful boundaries.
                </p>

                <p>
                    Users are responsible for maintaining the confidentiality of their
                    account credentials and any activities performed through their account.
                </p>

                <p>
                    The platform may include authentication systems, appointment workflows,
                    messaging systems, or database interactions depending on the project
                    implementation. Users agree not to misuse, disrupt, or attempt
                    unauthorized access to these services.
                </p>

                <p>
                    While reasonable effort has been made to ensure system reliability and
                    security, this application is not intended for production-critical,
                    medical, financial, or enterprise usage.
                </p>

                <p>
                    The project owner reserves the right to modify, suspend, or discontinue
                    features of the application at any time without prior notice.
                </p>

                <p>
                    Continued use of the platform indicates acceptance of these terms and
                    conditions.
                </p>

            </div>
        </section>
    )
}

export default TOS
