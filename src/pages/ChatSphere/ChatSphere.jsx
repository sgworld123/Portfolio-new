import React from 'react'
import styles from './ChatSphere.module.css';

function ChatApp() {
    return (
        <div className={styles.projectPage}>

            {/* HERO */}
            <section className={styles.hero}>

                <div className={styles.heroContent}>

                    <span className={styles.projectType}>
                        Real-Time Communication • Backend Systems
                    </span>

                    <h1 className={styles.projectTitle}>
                        Real-Time Chat Application
                    </h1>
                    <a
                        href="https://github.com/sgworld123/chat-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubCapsule}
                    >
                        View GitHub Repository
                    </a>

                    <p className={styles.projectDescription}>
                        A real-time chat platform built using Spring Boot, WebSockets,
                        JWT authentication, and MongoDB Atlas with Dockerized deployment
                        on Render.
                    </p>

                    <div className={styles.techStack}>
                        <span>Spring Boot</span>
                        <span>WebSockets</span>
                        <span>JWT</span>
                        <span>MongoDB Atlas</span>
                        <span>Docker</span>
                        <span>Bootstrap</span>
                    </div>

                </div>

            </section>

            {/* OVERVIEW */}
            <section className={styles.section}>
                <h2>Project Overview</h2>

                <p>
                    This project was built to explore real-time communication using
                    WebSockets along with secure authentication and cloud database
                    integration.
                </p>

                <p>
                    Users can authenticate securely, join the chat room, and exchange
                    messages instantly through persistent WebSocket connections.
                </p>
            </section>

            {/* FEATURES */}
            <section className={styles.section}>
                <h2>Key Features</h2>

                <div className={styles.featureGrid}>

                    <div className={styles.featureCard}>
                        <h3>Real-Time Messaging</h3>

                        <p>
                            Instant message delivery using WebSocket communication.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>JWT Authentication</h3>

                        <p>
                            Secure login and protected communication channels using JWT.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>MongoDB Atlas</h3>

                        <p>
                            Cloud-hosted database for storing users and chat messages.
                        </p>
                    </div>

                    <div className={styles.featureCard}>
                        <h3>Docker Deployment</h3>

                        <p>
                            Containerized application deployed on Render using Docker.
                        </p>
                    </div>

                </div>

            </section>

            {/* ARCHITECTURE */}
            <section className={styles.section}>
                <h2>Architecture</h2>

                <div className={styles.architectureBox}>

                    <div>Bootstrap Frontend</div>

                    <span>↓</span>

                    <div>Spring Boot Backend</div>

                    <span>↓</span>

                    <div className={styles.architectureGrid}>
                        <div>Spring Security</div>
                        <div>JWT Authentication</div>
                        <div>WebSocket Messaging</div>
                    </div>

                    <span>↓</span>

                    <div>MongoDB Atlas</div>

                </div>

            </section>

            {/* TECH STACK */}
            <section className={styles.section}>
                <h2>Technologies Used</h2>

                <div className={styles.capsuleContainer}>

                    <span className={styles.capsule}>Java</span>
                    <span className={styles.capsule}>Spring Boot</span>
                    <span className={styles.capsule}>Spring Security</span>
                    <span className={styles.capsule}>WebSocket</span>
                    <span className={styles.capsule}>JWT</span>

                    <span className={styles.capsule}>MongoDB Atlas</span>

                    <span className={styles.capsule}>Docker</span>
                    <span className={styles.capsule}>Render</span>

                    <span className={styles.capsule}>Bootstrap</span>
                    <span className={styles.capsule}>JavaScript</span>

                    <span className={styles.capsule}>REST APIs</span>
                    <span className={styles.capsule}>Postman</span>

                </div>

            </section>

            {/* LEARNINGS */}
            <section className={styles.section}>
                <h2>Key Learnings</h2>

                <p>
                    This project helped strengthen understanding of WebSocket-based
                    communication, JWT authentication flows, cloud database integration,
                    and Dockerized backend deployment.
                </p>

                <p>
                    It also provided practical experience in managing persistent
                    client-server communication and secure real-time messaging systems.
                </p>
            </section>

        </div>
    )
}

export default ChatApp
