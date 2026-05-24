import React from 'react'
import styles from './Ayursutra.module.css';
import ProjectCarousel from '../../components/ui/ProjectCarousel/ProjectCarousel';
import ayursutra1 from '../../assets/Ayursutra/img1.png'
import ayursutra2 from '../../assets/Ayursutra/img2.png'
import ayursutra3 from '../../assets/Ayursutra/img3.png'
import ayursutra4 from '../../assets/Ayursutra/img4.png'
import ayursutra5 from '../../assets/Ayursutra/img5.png'

const ayursutraImages = [ayursutra1, ayursutra2, ayursutra3, ayursutra4, ayursutra5];

const AyurSutra = () => {
    return (
        <div className={styles.projectPage}>

            {/* HERO */}
            <section className={styles.hero}>

                <div className={styles.heroContent}>

                    <span className={styles.projectType}>
                        Full Stack Healthcare Platform
                    </span>

                    <h1 className={styles.projectTitle}>
                        AyurSutra — Hospital Management System
                    </h1>
                    <a
                        href="https://github.com/sgworld123/ayushsutra-Docter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubCapsule}
                    >
                        View GitHub Repository
                    </a>

                    <p className={styles.projectDescription}>
                        AyurSutra is a full-stack healthcare management platform designed
                        to simplify appointment scheduling, doctor-patient coordination,
                        and healthcare workflow management through a modern web interface.
                    </p>

                    <div className={styles.techStack}>
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>Firebase Auth</span>
                        <span>Tailwind CSS</span>
                    </div>

                </div>

            </section>

            {/* OVERVIEW */}
            <section className={styles.section}>
                <h2>Project Overview</h2>

                <p>
                    AyurSutra was developed to provide a centralized healthcare
                    management solution where patients, doctors, and administrators
                    can interact through role-based dashboards.
                </p>

                <p>
                    The platform enables appointment booking, schedule management,
                    authentication, and patient workflow handling with a clean
                    and responsive user experience.
                </p>
            </section>

            {/* FEATURES */}
            <section className={styles.section}>
                <h2>Key Features</h2>

                <div className={styles.featureGrid}>

                    <div className={styles.featureCard}>
                        <h3>User Authentication</h3>

                        <p>
                            Secure login system using Firebase Authentication and Google OAuth.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>Appointment Management</h3>

                        <p>
                            Patients can book, reschedule, and cancel appointments easily.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>Doctor Dashboard</h3>

                        <p>
                            Doctors can manage schedules, appointments, and patient records.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>Patient Dashboard</h3>

                        <p>
                            Patients can track appointments and manage healthcare information.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>Role-Based Access</h3>

                        <p>
                            Separate access levels for patients, doctors, and administrators.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>Responsive UI</h3>

                        <p>
                            Mobile-friendly interface with clean navigation and animations.
                        </p>
                    </div>

                </div>

            </section>

            {/* ARCHITECTURE */}
            <section className={styles.section}>
                <h2>Architecture</h2>

                <div className={styles.architectureBox}>

                    <div>React Frontend</div>

                    <span>↓</span>

                    <div>Express.js Backend</div>

                    <span>↓</span>

                    <div className={styles.architectureGrid}>
                        <div>Firebase Auth</div>
                        <div>REST APIs</div>
                        <div>Role-Based Access</div>
                    </div>

                    <span>↓</span>

                    <div>MongoDB Database</div>

                </div>

            </section>

            {/* TECHNOLOGIES */}
            <section className={styles.section}>
                <h2>Technologies Used</h2>

                <div className={styles.capsuleContainer}>

                    <span className={styles.capsule}>React.js</span>
                    <span className={styles.capsule}>Tailwind CSS</span>
                    <span className={styles.capsule}>CSS Modules</span>

                    <span className={styles.capsule}>Node.js</span>
                    <span className={styles.capsule}>Express.js</span>

                    <span className={styles.capsule}>MongoDB</span>
                    <span className={styles.capsule}>Mongoose</span>

                    <span className={styles.capsule}>Firebase Auth</span>
                    <span className={styles.capsule}>Google OAuth</span>

                    <span className={styles.capsule}>REST APIs</span>
                    <span className={styles.capsule}>Responsive Design</span>

                </div>

            </section>

            {/* LEARNINGS */}
            <section className={styles.section}>
                <h2>Key Learnings</h2>

                <p>
                    This project strengthened understanding of full-stack application
                    development, role-based authentication systems, and REST API
                    integration.
                </p>

                <p>
                    It also provided practical experience in building scalable frontend
                    interfaces and connecting them with secure backend workflows.
                </p>

            </section>
            <section id="gallery" className={styles.section}>
                <h2>Image Gallery</h2>
                <ProjectCarousel images={ayursutraImages} title="Ayursutra" />
            </section>

        </div>
    )
}

export default AyurSutra
