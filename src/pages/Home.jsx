import React from 'react';
import ProjectCarousel from '../components/ui/ProjectCarousel/ProjectCarousel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { getRecentPosts, getFeaturedWorks, getSkillSet, getOpenSourceProjects, getExperience } from '../services/mockData';
import styles from './Home.module.css';
import { Mail, Phone, Link2, GitFork } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Home = () => {
  const recentPosts = getRecentPosts();
  const featuredWorks = getFeaturedWorks();
  const skills = getSkillSet();
  const openSource = getOpenSourceProjects();
  const navigate = useNavigate();
  const experience = getExperience();
  const [status, setStatus] = useState('');

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // from EmailJS dashboard
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // from EmailJS dashboard
        {
          from_name: userInfo.name,
          from_email: userInfo.email,
          message: userInfo.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // from EmailJS dashboard → Account
      );

      setStatus('sent');
      setUserInfo({ name: '', email: '', message: '' }); // reset form

    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className="container" id="home">
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Hi, I am Shreyansh,<br /></h1>
            <p>Building scalable applications with clean architecture and modern technologies.
              I enjoy designing backend systems, crafting polished interfaces, and turning ideas into usable products.</p>

            <div className={styles.heroButtons}>

              <Button className={styles.btnPrimary} onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Shreyansh_Resume.pdf';
                link.click();
              }}>
                Download Resume
              </Button>

              <a href="https://github.com/sgworld123" target="_blank" rel="noreferrer" className={styles.btnOutline}>
                GitHub
              </a>

              <a href="https://leetcode.com/sgworld123" target="_blank" rel="noreferrer" className={styles.btnOutline}>
                LeetCode
              </a>

            </div>
          </div>

          <div className={styles.heroImage}>
            <img src="/assets/image.png" alt="Shreyansh - Avatar" />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className={styles.recentPosts} id="projects">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Featured Projects</h2>
          </div>
          <div className={styles.postsGrid}>
            {recentPosts.map(post => (
              <Card key={post.id} className={styles.postCard} onClick={() => navigate(post.navTo)}>
                <ProjectCarousel images={post.images} title={post.title} />
                <h3 className={styles.postTitle}>{post.title}</h3>
                <div className={styles.postMeta}>
                  {post.date} <span>|</span> {post.tags.join(', ')}
                </div>
                <p className={styles.postSummary}>{post.summary}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/*Skills and technology section */}
      <section className="container" id="skills">
        <div className={styles.featuredWorks}>
          <h2>Skills & Technologies</h2>
          <div className={styles.worksList}>
            {getSkillSet().map(work => (
              <article key={work.id} className={styles.workItem}>
                <h3>{work.title}</h3>
                <div className={styles.tags}>
                  {work.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="container" id="open-source">
        <div className={styles.osFeaturedWorks}>
          <h2>Open Source Contributions</h2>
          <div className={styles.osWorksList}>
            {getOpenSourceProjects().map(work => (
              <article key={work.id} className={styles.osWorkItem}>
                <div className={styles.osWorkImg}>
                  <img src={work.image} alt={work.title} />
                </div>
                <div className={styles.osWorkDetails}>
                  <h3>{work.title}</h3>
                  <div className={styles.osWorkMeta}>
                    <Badge>{work.year}</Badge>
                    <div className={styles.osTags}>
                      {work.category.map(cat => (
                        <span key={cat} className={styles.osTag}>{cat}</span>
                      ))}
                    </div>
                  </div>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="container" id="experience">
        <div className={styles.expSection}>
          <h2>Experience</h2>
          <div className={styles.expList}>
            {getExperience().map(exp => (
              <article key={exp.id} className={styles.expItem}>

                {/* 1. Company + Role + Image */}
                <div className={styles.expHeader}>
                  <img src={exp.image} alt={exp.company} className={styles.expLogo} />
                  <div>
                    <h3>{exp.company}</h3>
                    <span className={styles.expMeta}>{exp.role} · {exp.type}</span>
                  </div>
                </div>

                {/* 2. Duration */}
                <span className={styles.expDuration}>{exp.duration}</span>

                {/* 3. Tech stack tags */}
                <div className={styles.expTags}>
                  {exp.tags.map(tag => (
                    <span key={tag} className={styles.expTag}>{tag}</span>
                  ))}
                </div>

                {/* 4. Bullet points */}
                <ul className={styles.expPoints}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container" id="contact">
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Let's Connect</h2>
          <p className={styles.contactSubtitle}>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.</p>

          <div className={styles.contactGrid}>

            {/* Left — Get In Touch */}
            <div className={styles.contactLeft}>
              <h3>Get In Touch</h3>

              <div className={styles.contactItems}>
                <a href="mailto:shreyanshg2905@gmail.com" className={styles.contactItem}>
                  <div className={styles.contactIcon}><Mail size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>shreyanshg2905@gmail.com</span>
                  </div>
                </a>

                <a href="tel:6393456282" className={styles.contactItem}>
                  <div className={styles.contactIcon}><Phone size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>Phone</span>
                    <span className={styles.contactValue}>6393456282</span>
                  </div>
                </a>

                <a href="https://linkedin.com/in/shreyansh-gupta-503253294" target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><Link2 size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <span className={styles.contactValue}>linkedin.com/in/shreyansh-gupta-503253294</span>
                  </div>
                </a>

                <a href="https://github.com/sgworld123" target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><GitFork size={18} /></div>
                  <div>
                    <span className={styles.contactLabel}>GitHub</span>
                    <span className={styles.contactValue}>github.com/sgworld123</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right — Send Message */}
            <div className={styles.contactRight}>
              <h3>Send a Message</h3>
              <p className={styles.contactFormSubtitle}>Fill out the form below and I'll get back to you as soon as possible.</p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input id="name" placeholder="Your name" value={userInfo.name}
                      onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="your.email@example.com" value={userInfo.email}
                      onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell me about your project or just say hello!"
                    rows={5} value={userInfo.message}
                    onChange={(e) => setUserInfo({ ...userInfo, message: e.target.value })} />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'sent' && <p className={styles.successMsg}>Message sent successfully!</p>}
                {status === 'error' && <p className={styles.errorMsg}>Something went wrong. Try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
