import React from 'react'
import styles from './Privpol.module.css'

const PrivacyPolicy = () => {
    return (
        <div>
            <section className={styles.section}>
                <h2>Privacy Policy</h2>

                <div className={styles.privacyBox}>

                    <p>
                        This project is developed for educational and portfolio purposes.
                        Any user information collected during authentication or application
                        usage is used solely to support core platform functionality.
                    </p>

                    <p>
                        Authentication services such as Firebase Auth are used to securely
                        manage user sessions and login workflows. Passwords and sensitive
                        credentials are never stored directly in plaintext.
                    </p>

                    <p>
                        The application does not sell, distribute, or share personal user
                        data with third parties. Database records are only used for features
                        such as appointment management, bookings, messaging, or user-specific
                        workflows depending on the project.
                    </p>

                    <p>
                        While reasonable security practices and protected APIs have been
                        implemented, this platform is intended as a demonstration project
                        and should not be treated as a production healthcare or enterprise
                        system.
                    </p>

                    <p>
                        By using this application, users acknowledge that the platform is
                        provided for demonstration and learning purposes only.
                    </p>

                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
