import React from "react";
import styles from "./MoveWise.module.css";
import ProjectCarousel from "../../components/ui/ProjectCarousel/ProjectCarousel";

import movewise1 from '../../assets/Movewise/img1.jpeg';
import movewise2 from '../../assets/Movewise/img2.jpeg';
import movewise3 from '../../assets/Movewise/img3.jpeg';
import movewise4 from '../../assets/Movewise/img4.jpeg';
import movewise5 from '../../assets/Movewise/img5.jpeg';

const moveWiseImages = [
  movewise1,
  movewise2,
  movewise3,
  movewise4,
  movewise5
];

const MoveWise = () => {
  return (
    <div className={styles.projectPage}>

      {/* HERO */}
      <section className={styles.hero}>

        <div className={styles.heroContent}>

          <span className={styles.projectType}>
            Geo-Spatial Systems • Mobile Engineering
          </span>

          <h1 className={styles.projectTitle}>
            MoveWise — Smart City Relocation Assistant
          </h1>
          <a
            href="https://github.com/sgworld123/MoveWise"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubCapsule}
          >
            View GitHub Repository
          </a>

          <p className={styles.projectDescription}>
            MoveWise is a React Native and Spring Boot powered relocation
            assistant that helps users discover similar places in a new city
            based on locations they already love in their current city.
          </p>

          <p className={styles.projectDescription}>
            The platform combines geo-spatial caching, concurrent API
            aggregation, Google Maps integration, and reactive backend
            architecture to deliver fast, personalized relocation
            recommendations.
          </p>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className={styles.section}>
        <h2>Project Overview</h2>

        <p>
          Relocating to a new city is often overwhelming because users lose
          familiarity with gyms, cafes, restaurants, and other frequently
          visited places that match their personal preferences.
        </p>

        <p>
          MoveWise solves this problem by intelligently identifying similar
          locations in a target city using category-based recommendation
          matching and geo-spatial search optimization.
        </p>

        <p>
          The platform was designed to simulate production-grade API
          orchestration while optimizing repeated location queries using
          Redis-based geo-caching.
        </p>
      </section>

      {/* PROBLEM */}
      <section className={styles.section}>
        <h2>Problem Statement</h2>

        <ul className={styles.list}>
          <li>
            Users moving to a new city struggle to discover places matching
            their lifestyle and preferences.
          </li>

          <li>
            Google Places APIs introduce latency and redundant requests when
            repeatedly querying nearby recommendations.
          </li>

          <li>
            Sequential external API calls significantly slow down user
            experience during multi-category searches.
          </li>

          <li>
            Mobile relocation workflows require responsive recommendation
            systems with low-latency results.
          </li>
        </ul>

        <p>
          The challenge was to architect a scalable recommendation workflow
          capable of delivering fast, personalized place suggestions while
          minimizing external API overhead.
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section className={styles.section}>
        <h2>Architecture & System Design</h2>

        <div className={styles.architectureBox}>

          <div>React Native + Expo Frontend</div>

          <span>↓</span>

          <div>Spring Boot Backend</div>

          <span>↓</span>

          <div className={styles.architectureGrid}>
            <div>Spring WebFlux</div>
            <div>Reactive WebClient</div>
            <div>Concurrent API Aggregation</div>
            <div>Recommendation Engine</div>
          </div>

          <span>↓</span>

          <div className={styles.architectureGrid}>
            <div>Redis GEO Cache</div>
            <div>MongoDB Atlas</div>
          </div>

          <span>↓</span>

          <div>RapidAPI → Google Places API</div>

        </div>

        <p>
          The backend uses Spring WebFlux and Reactor to concurrently fetch
          recommendations for multiple place categories using reactive streams
          and non-blocking HTTP calls.
        </p>
      </section>

      {/* SOLUTION */}
      <section className={styles.section}>
        <h2>Solution Proposed</h2>

        <div className={styles.featureGrid}>

          <div className={styles.featureCard}>
            <h3>Geo-Spatial Caching</h3>

            <p>
              Redis GEO queries cache previously fetched recommendations
              to minimize redundant Google Places API calls.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Concurrent API Fetching</h3>

            <p>
              Spring WebFlux and Reactor Flux.merge were used to fetch
              multiple place categories concurrently.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Recommendation Matching</h3>

            <p>
              The backend identifies place types from user-selected favorites
              and searches similar categories in the destination city.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Google Maps Integration</h3>

            <p>
              Users can visually explore recommended locations directly
              through map-based interactions.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Reactive Backend Design</h3>

            <p>
              Non-blocking WebFlux architecture improves scalability and
              reduces request wait time during high API aggregation.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Persistent Recommendation Storage</h3>

            <p>
              MongoDB Atlas stores previously fetched recommendations
              for historical lookup and optimization.
            </p>
          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className={styles.section}>
        <h2>Technologies & Tools Used</h2>

        <div className={styles.capsuleContainer}>

          <span className={styles.capsule}>Java 17</span>
          <span className={styles.capsule}>Spring Boot 3.2</span>
          <span className={styles.capsule}>Spring WebFlux</span>
          <span className={styles.capsule}>Project Reactor</span>

          <span className={styles.capsule}>Redis Cloud</span>
          <span className={styles.capsule}>GEORADIUS Queries</span>

          <span className={styles.capsule}>MongoDB Atlas</span>

          <span className={styles.capsule}>React Native</span>
          <span className={styles.capsule}>Expo Router</span>

          <span className={styles.capsule}>Google Maps SDK</span>
          <span className={styles.capsule}>RapidAPI</span>

          <span className={styles.capsule}>Docker</span>
          <span className={styles.capsule}>Render Deployment</span>

          <span className={styles.capsule}>REST APIs</span>
          <span className={styles.capsule}>Concurrent Processing</span>

        </div>
      </section>

      {/* PERFORMANCE */}
      <section className={styles.section}>
        <h2>Performance Optimizations</h2>

        <div className={styles.metricsGrid}>

          <div className={styles.metricCard}>
            <h3>Concurrent API Fetching</h3>
            <span>Flux.merge</span>
          </div>

          <div className={styles.metricCard}>
            <h3>Geo Cache Queries</h3>
            <span>Redis GEO</span>
          </div>

          <div className={styles.metricCard}>
            <h3>Reduced API Calls</h3>
            <span>Cache Optimized</span>
          </div>

          <div className={styles.metricCard}>
            <h3>Reactive Backend</h3>
            <span>Non-Blocking</span>
          </div>

        </div>

        <p>
          Redis geo-spatial caching significantly reduced repeated external
          API requests while WebFlux improved throughput through concurrent
          recommendation fetching.
        </p>
      </section>

      {/* API FLOW */}
      <section className={styles.section}>
        <h2>Recommendation Flow</h2>

        <ul className={styles.list}>
          <li>
            User selects favorite places from their current city.
          </li>

          <li>
            Backend extracts and deduplicates place categories.
          </li>

          <li>
            Redis geo-cache is checked for nearby recommendations.
          </li>

          <li>
            Cache miss triggers concurrent Google Places API requests.
          </li>

          <li>
            Results are ranked by rating and stored in MongoDB.
          </li>

          <li>
            Top recommendations are returned to the mobile client.
          </li>
        </ul>

        <p>
          The recommendation workflow prioritizes responsiveness and minimizes
          repeated external API dependency costs.
        </p>
      </section>

      {/* LEARNINGS */}
      <section className={styles.section}>
        <h2>Key Engineering Learnings</h2>

        <p>
          MoveWise provided deep practical exposure to reactive programming,
          concurrent request orchestration, geo-spatial caching, and mobile
          application architecture.
        </p>

        <p>
          One of the most valuable learnings was understanding how reactive
          systems and distributed caching significantly improve scalability
          and responsiveness in API-heavy applications.
        </p>

        <p>
          The project also strengthened understanding of mobile UX workflows,
          external API optimization, Docker deployment, and cloud-based
          backend infrastructure design.
        </p>
      </section>
      <section id="gallery" className={styles.section}>
        <h2>Image Gallery</h2>
        <ProjectCarousel
          images={moveWiseImages}
          title="MoveWise"
          className={styles.galleryCarousel}
        />
      </section>

    </div>
  );
};

export default MoveWise;
