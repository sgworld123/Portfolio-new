import React from 'react';
import styles from './RentEngine.module.css';
import ProjectCarousel from '../components/ui/ProjectCarousel/ProjectCarousel';
import rentengine1 from '../assets/Rentengine/pic1.jpg';
import rentengine2 from '../assets/Rentengine/pic2.jpg';
import rentengine3 from '../assets/Rentengine/pic3.jpg';
import rentengine4 from '../assets/Rentengine/pic4.jpg';
import rentengine5 from '../assets/Rentengine/pic5.jpg';

const rentEngineImages = [rentengine1, rentengine2, rentengine3, rentengine4, rentengine5];
const RentEngine = () => {
  return (
    <div className={styles.projectPage}>

      {/* HERO SECTION */}
      <section className={styles.section}>
        <h1 className={styles.projectTitle}>
          RentEngine — Distributed Car Rental Ecosystem
        </h1>
        <h2>Project Overview</h2>

        <p>
          RentEngine is a full-stack microservices-based car rental platform built
          using Spring Boot, React, RabbitMQ, Redis, MongoDB, and Docker.
        </p>

        <p>
          The platform allows users to search rental agencies by city, browse
          vehicles, create bookings with real-time availability validation,
          confirm payments asynchronously, and cancel bookings with automated
          refund workflows.
        </p>

        <p>
          The primary objective of the project was to explore production-oriented
          backend engineering concepts including distributed systems, event-driven
          communication, service discovery, distributed locking, JWT security,
          caching, and asynchronous workflow orchestration.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Problem Statement</h2>

        <p>
          Traditional monolithic rental systems often struggle with concurrent
          reservation conflicts, tightly coupled business logic, poor scalability,
          and inconsistent booking states during failures.
        </p>

        <ul className={styles.list}>
          <li>
            Prevent multiple users from booking the same vehicle simultaneously.
          </li>

          <li>
            Reduce repeated inventory queries and database load.
          </li>

          <li>
            Handle payment confirmation and refund workflows asynchronously.
          </li>

          <li>
            Secure all services behind centralized JWT validation.
          </li>

          <li>
            Build independently deployable backend services.
          </li>
        </ul>

        <p>
          RentEngine was designed specifically to solve these backend scalability
          and reliability challenges using a distributed microservices architecture.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Technologies & Tools Used</h2>

        <p>
          The platform integrates a modern distributed backend stack along with a
          responsive frontend architecture focused on scalability, reliability,
          caching, asynchronous communication, and secure authentication.
        </p>

        <div className={styles.capsuleContainer}>

          <span className={styles.capsule}>Java</span>
          <span className={styles.capsule}>Spring Boot 3</span>
          <span className={styles.capsule}>Spring Security</span>
          <span className={styles.capsule}>Spring Cloud Gateway</span>
          <span className={styles.capsule}>Netflix Eureka</span>

          <span className={styles.capsule}>RabbitMQ</span>
          <span className={styles.capsule}>Dead Letter Queues</span>

          <span className={styles.capsule}>Redis</span>
          <span className={styles.capsule}>Distributed Locking</span>

          <span className={styles.capsule}>MongoDB</span>

          <span className={styles.capsule}>JWT Authentication</span>
          <span className={styles.capsule}>Refresh Token Rotation</span>
          <span className={styles.capsule}>BCrypt</span>

          <span className={styles.capsule}>React 18</span>
          <span className={styles.capsule}>Vite</span>
          <span className={styles.capsule}>React Router</span>

          <span className={styles.capsule}>Axios Interceptors</span>

          <span className={styles.capsule}>Docker</span>
          <span className={styles.capsule}>Docker Compose</span>

          <span className={styles.capsule}>JUnit</span>
          <span className={styles.capsule}>Mockito</span>
          <span className={styles.capsule}>MockMvc</span>

          <span className={styles.capsule}>k6 Load Testing</span>

          <span className={styles.capsule}>REST APIs</span>
          <span className={styles.capsule}>Microservices</span>
          <span className={styles.capsule}>Event-Driven Architecture</span>

        </div>
      </section>

      <section className={styles.section}>
        <h2>Architecture & System Design</h2>

        <p>
          The platform follows a distributed microservices architecture where
          independent services communicate through REST APIs and RabbitMQ events.
        </p>

        <div className={styles.architectureBox}>

          <div>React Frontend (Vite + React)</div>

          <span>↓</span>

          <div>
            Spring Cloud Gateway
            <br />
            JWT Validation + Route Forwarding
          </div>

          <span>↓</span>

          <div className={styles.architectureGrid}>
            <div>UserService</div>
            <div>AgencyService</div>
            <div>BookingService</div>
            <div>PaymentService</div>
          </div>

          <span>↓</span>

          <div>RabbitMQ Event Broker</div>

          <span>↓</span>

          <div className={styles.architectureGrid}>
            <div>Redis Cache</div>
            <div>MongoDB</div>
            <div>Eureka Discovery</div>
            <div>Dead Letter Queues</div>
          </div>

        </div>

        <p>
          All services register dynamically with Netflix Eureka for service
          discovery while Spring Cloud Gateway handles centralized authentication
          and request routing.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Booking Lifecycle</h2>

        <p>
          The booking workflow was designed around asynchronous event-driven
          processing to improve reliability and decouple payment operations from
          booking creation.
        </p>

        <ul className={styles.list}>
          <li>
            User creates a booking → BookingService marks booking as PENDING.
          </li>

          <li>
            Redis distributed locking temporarily locks vehicle dates to prevent
            double booking.
          </li>

          <li>
            BookingCreatedEvent is published to RabbitMQ.
          </li>

          <li>
            PaymentService consumes the event and processes payment asynchronously.
          </li>

          <li>
            PaymentSuccessEvent updates booking status to CONFIRMED.
          </li>

          <li>
            Payment failures automatically release Redis locks and cancel the
            booking.
          </li>
        </ul>

        <p>
          The system also supports asynchronous refund processing for cancelled
          bookings with frontend polling for real-time UI updates.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key Engineering Features</h2>

        <div className={styles.featureGrid}>

          <div className={styles.featureCard}>
            <h3>Distributed Locking</h3>

            <p>
              Redis-based locking prevents race conditions and conflicting vehicle
              reservations during concurrent booking attempts.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Asynchronous Messaging</h3>

            <p>
              RabbitMQ event queues decouple booking and payment workflows while
              improving system reliability.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>JWT Security</h3>

            <p>
              Centralized JWT validation at the API Gateway with refresh token
              rotation and automatic token renewal.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Service Discovery</h3>

            <p>
              Netflix Eureka dynamically manages service registration and discovery
              between distributed services.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Dead Letter Queues</h3>

            <p>
              Failed payment events are routed into DLQs for reliability and fault
              tolerance handling.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Dockerized Deployment</h3>

            <p>
              Entire backend infrastructure including MongoDB, Redis, RabbitMQ,
              and all services runs through Docker Compose orchestration.
            </p>
          </div>

        </div>
      </section>

      <section className={styles.section}>
        <h2>Performance Testing</h2>

        <p>
          The platform was load tested using k6 against the Dockerized distributed
          stack consisting of 6 services along with MongoDB, Redis, and RabbitMQ.
        </p>

        <div className={styles.metricsGrid}>

          <div className={styles.metricCard}>
            <h3>Total Requests</h3>
            <span>1,567</span>
          </div>

          <div className={styles.metricCard}>
            <h3>Throughput</h3>
            <span>~50 req/sec</span>
          </div>

          <div className={styles.metricCard}>
            <h3>Average Response</h3>
            <span>481ms</span>
          </div>

          <div className={styles.metricCard}>
            <h3>Min Response</h3>
            <span>16ms</span>
          </div>

          <div className={styles.metricCard}>
            <h3>p(90) Response</h3>
            <span>848ms</span>
          </div>

          <div className={styles.metricCard}>
            <h3>Failure Rate</h3>
            <span>0%</span>
          </div>

        </div>

        <p>
          Performance improvements were heavily influenced by Redis caching and
          asynchronous event processing.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Security Design</h2>

        <ul className={styles.list}>
          <li>
            JWT validation occurs at the API Gateway before requests reach any
            backend service.
          </li>

          <li>
            30-minute access tokens and 7-day rotating refresh tokens are securely
            managed in MongoDB.
          </li>

          <li>
            Axios interceptors automatically refresh expired access tokens on the
            frontend.
          </li>

          <li>
            BCrypt password hashing secures stored credentials.
          </li>

          <li>
            Protected booking operations validate ownership before processing.
          </li>
        </ul>

        <p>
          The authentication architecture was designed to mimic modern production
          security flows used in scalable distributed systems.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Testing & Reliability</h2>

        <p>
          Extensive unit and controller testing was implemented across all backend
          services using Mockito and MockMvc.
        </p>

        <ul className={styles.list}>
          <li>
            35+ automated test cases across 4 microservices.
          </li>

          <li>
            Booking lifecycle validation across 6 booking states.
          </li>

          <li>
            RabbitMQ event publishing and consumption tests.
          </li>

          <li>
            Redis rollback and lock release verification.
          </li>

          <li>
            JWT refresh token rotation testing.
          </li>

          <li>
            Controller-level API integration testing.
          </li>
        </ul>

        <p>
          Reliability testing focused heavily on edge-case handling and distributed
          workflow consistency.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Key Learnings</h2>

        <p>
          Building RentEngine provided practical exposure to distributed system
          architecture, event-driven communication, caching strategies, JWT-based
          security, Docker orchestration, and backend scalability patterns.
        </p>

        <p>
          One of the most valuable engineering insights was understanding how
          asynchronous messaging and distributed locking improve reliability in
          transactional systems handling concurrent user operations.
        </p>

        <p>
          The project significantly strengthened backend engineering skills around
          system modularity, fault tolerance, scalability, and production-oriented
          service design.
        </p>
      </section>
      <section id="gallery" className={styles.section}>
        <h2>Image Gallery</h2>
        <ProjectCarousel images={rentEngineImages} title="RentEngine" />
      </section>

    </div>
  );
};

export default RentEngine;